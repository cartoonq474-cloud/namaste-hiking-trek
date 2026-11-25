/**
 * Namaste Hiking Trek — Unified Static Form Delivery & Lead Protection
 * Routes all website inquiries, booking requests, applications, reviews, and newsletter signups
 * to info@namastehikingtrek.com with zero-lead-loss mailto/WhatsApp fallback.
 */
(function (global) {
  'use strict';

  var TARGET_EMAIL = 'info@namastehikingtrek.com';
  var ENDPOINT = 'https://formsubmit.co/ajax/' + TARGET_EMAIL;
  var WHATSAPP_URL = 'https://wa.me/9779849009919';

  function injectStatusStyles() {
    if (document.getElementById('nht-form-delivery-styles')) return;
    var style = document.createElement('style');
    style.id = 'nht-form-delivery-styles';
    style.textContent =
      '.nht-form-status{margin-top:14px;padding:14px 16px;border-radius:10px;font-size:0.92rem;line-height:1.55;text-align:left;}' +
      '.nht-form-status.is-success{background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;}' +
      '.nht-form-status.is-error{background:#fef2f2;border:1px solid #fecaca;color:#991b1b;}' +
      '.nht-form-status.is-fallback{background:#fffbeb;border:1px solid #fde68a;color:#92400e;}' +
      '.nht-fallback-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;}' +
      '.nht-fallback-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:9999px;font-size:0.84rem;font-weight:700;text-decoration:none;}' +
      '.nht-fallback-email{background:#059669;color:#ffffff !important;}' +
      '.nht-fallback-wa{background:#ffffff;color:#0f172a !important;border:1px solid #cbd5e1;}';
    document.head.appendChild(style);
  }

  function cleanLabelText(raw) {
    if (!raw) return '';
    return raw
      .replace(/\*+/g, '')
      .replace(/[:：]\s*$/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function titleCaseKey(raw) {
    return raw
      .replace(/^(inq|c|cust|app|rev|book|modal|custom)[-_]/i, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\b\w/g, function (ch) { return ch.toUpperCase(); })
      .trim();
  }

  function getFieldLabel(el, form) {
    var explicit = el.getAttribute('data-field-label');
    if (explicit) return cleanLabelText(explicit);

    if (el.id) {
      var safeId = (typeof CSS !== 'undefined' && typeof CSS.escape === 'function')
        ? CSS.escape(el.id)
        : el.id.replace(/["\\]/g, '\\$&');
      var byFor = form.querySelector('label[for="' + safeId + '"]');
      if (byFor) return cleanLabelText(byFor.textContent);
    }

    var wrappingLabel = el.closest('label');
    if (wrappingLabel) {
      return cleanLabelText(wrappingLabel.textContent);
    }

    var group = el.closest('.form-group, div');
    if (group) {
      var groupFields = group.querySelectorAll('input:not([type="hidden"]), select, textarea');
      if (groupFields.length === 1) {
        var lbl = group.querySelector('label');
        if (lbl) return cleanLabelText(lbl.textContent);
      }
    }

    if (el.name) return titleCaseKey(el.name);
    if (el.id) return titleCaseKey(el.id);

    var ph = el.getAttribute('placeholder');
    if (ph) {
      return cleanLabelText(ph.replace(/^e\.g\.\s*/i, '').replace(/\.{3,}$/g, ''));
    }

    if (el.type === 'email') return 'Email Address';
    if (el.type === 'tel') return 'Phone / WhatsApp';
    if (el.tagName === 'TEXTAREA') return 'Message / Notes';
    return 'Field';
  }

  function extractPayload(form) {
    var fields = {};
    var visitorEmail = '';
    var visitorName = '';
    var honeypotTriggered = false;

    var controls = form.querySelectorAll('input, select, textarea');
    controls.forEach(function (el) {
      var type = (el.getAttribute('type') || el.tagName).toLowerCase();
      if (el.name === '_honey') {
        if (el.value && el.value.trim() !== '') honeypotTriggered = true;
        return;
      }
      if (type === 'submit' || type === 'button' || type === 'reset' || type === 'image') return;
      if (type === 'hidden' && !el.name) return;
      if ((type === 'checkbox' || type === 'radio') && !el.checked) return;

      var val = '';
      if (el.tagName === 'SELECT') {
        var opt = el.options[el.selectedIndex];
        val = opt ? (opt.text || opt.value || '').trim() : (el.value || '').trim();
      } else {
        val = (el.value || '').trim();
      }
      if (!val) return;

      var label = getFieldLabel(el, form) || 'Details';
      var key = label;
      var suffix = 2;
      while (Object.prototype.hasOwnProperty.call(fields, key)) {
        key = label + ' (' + suffix + ')';
        suffix += 1;
      }
      fields[key] = val;

      var lowerHint = (label + ' ' + (el.name || '') + ' ' + (el.id || '')).toLowerCase();
      if (!visitorEmail && (type === 'email' || lowerHint.indexOf('email') !== -1)) {
        visitorEmail = val;
      }
      if (!visitorName && type !== 'email' && lowerHint.indexOf('name') !== -1 && lowerHint.indexOf('guide') === -1) {
        visitorName = val;
      }
    });

    return {
      fields: fields,
      visitorEmail: visitorEmail,
      visitorName: visitorName,
      honeypotTriggered: honeypotTriggered
    };
  }

  function buildMailtoHref(subject, fields) {
    var lines = [];
    Object.keys(fields).forEach(function (k) {
      lines.push(k + ': ' + fields[k]);
    });
    lines.push('Page: ' + window.location.href);
    var body = lines.join('\n').slice(0, 1600);
    return 'mailto:' + TARGET_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  }

  function ensureHoneyField(form) {
    if (form.querySelector('input[name="_honey"]')) return;
    var honey = document.createElement('input');
    honey.type = 'text';
    honey.name = '_honey';
    honey.tabIndex = -1;
    honey.autocomplete = 'off';
    honey.setAttribute('aria-hidden', 'true');
    honey.style.cssText = 'position:absolute;left:-9999px;opacity:0;height:0;width:0;pointer-events:none;';
    form.appendChild(honey);
  }

  function ensureFeedbackEl(form, customEl) {
    if (customEl) return customEl;
    var existing = form.querySelector('.nht-form-status');
    if (existing) return existing;
    var el = document.createElement('div');
    el.className = 'nht-form-status';
    el.style.display = 'none';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    form.appendChild(el);
    return el;
  }

  function showStatus(el, kind, html) {
    injectStatusStyles();
    el.className = 'nht-form-status ' + kind;
    el.innerHTML = html;
    el.style.display = 'block';
  }

  function validateFormControls(form) {
    var controls = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < controls.length; i += 1) {
      var el = controls[i];
      if (el.name === '_honey' || el.disabled) continue;
      if (!el.checkValidity()) {
        var label = getFieldLabel(el, form);
        if (el.validity.valueMissing) {
          return 'Please fill in ' + (label || 'all required fields') + '.';
        }
        if (el.validity.typeMismatch && el.type === 'email') {
          return 'Please enter a valid email address.';
        }
        return el.validationMessage || ('Please check ' + (label || 'your entry') + '.');
      }
    }
    return null;
  }

  function renderFallback(feedbackEl, subject, fields) {
    var mailtoHref = buildMailtoHref(subject, fields);
    showStatus(
      feedbackEl,
      'is-fallback',
      '<strong>Automatic delivery could not complete right now.</strong> Your details have been preserved — click below to send them directly to <strong>' +
        TARGET_EMAIL + '</strong> or chat with our team on WhatsApp:' +
        '<div class="nht-fallback-actions">' +
        '<a class="nht-fallback-btn nht-fallback-email" href="' + mailtoHref + '">Send via Email (' + TARGET_EMAIL + ')</a>' +
        '<a class="nht-fallback-btn nht-fallback-wa" href="' + WHATSAPP_URL + '" target="_blank" rel="noopener">WhatsApp +977 984-9009919</a>' +
        '</div>'
    );
  }

  async function submitForm(form, options) {
    options = options || {};
    var feedbackEl = ensureFeedbackEl(form, options.feedbackEl);

    if (typeof options.validate === 'function') {
      var customErr = options.validate(form);
      if (customErr) {
        showStatus(feedbackEl, 'is-error', customErr);
        return { ok: false, validationError: customErr };
      }
    } else {
      var validationErr = validateFormControls(form);
      if (validationErr) {
        showStatus(feedbackEl, 'is-error', validationErr);
        return { ok: false, validationError: validationErr };
      }
    }

    var extracted = extractPayload(form);
    var context = typeof options.getContext === 'function' ? (options.getContext(form) || {}) : {};
    var trekTitle = context.trekTitle || options.trekTitle || '';
    var subjectPrefix = context.subjectPrefix || options.subjectPrefix || 'Website Inquiry';
    var sourceName = context.sourceName || options.sourceName || 'Website Form';

    var subjectParts = ['[Namaste Hiking Trek] ' + subjectPrefix];
    if (trekTitle) subjectParts.push(trekTitle);
    if (extracted.visitorName) subjectParts.push(extracted.visitorName);
    else if (extracted.visitorEmail) subjectParts.push(extracted.visitorEmail);
    var subject = subjectParts.join(' — ');

    if (extracted.honeypotTriggered) {
      if (typeof options.onSuccess === 'function') {
        options.onSuccess({ fields: extracted.fields, visitorEmail: extracted.visitorEmail, visitorName: extracted.visitorName, subject: subject, feedbackEl: feedbackEl });
      }
      return { ok: true, honeypot: true };
    }

    var submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    var prevBtnText = submitBtn ? (submitBtn.tagName === 'INPUT' ? submitBtn.value : submitBtn.innerHTML) : '';
    var prevBtnDisabled = submitBtn ? submitBtn.disabled : false;

    if (submitBtn) {
      submitBtn.disabled = true;
      if (submitBtn.tagName === 'INPUT') submitBtn.value = 'Sending...';
      else submitBtn.textContent = options.sendingText || 'Sending...';
    }

    var payload = {
      _subject: subject,
      _template: 'table',
      _honey: ''
    };
    if (extracted.visitorEmail) payload._replyto = extracted.visitorEmail;
    if (trekTitle && !extracted.fields['Selected Trip']) {
      payload['Selected Trip'] = trekTitle;
    }

    Object.keys(extracted.fields).forEach(function (k) {
      payload[k] = extracted.fields[k];
    });
    payload['Source Form'] = sourceName;
    payload['Page Title'] = document.title;
    payload['Page URL'] = window.location.href;
    payload['Submitted At'] = new Date().toISOString();

    var restoreBtn = function () {
      if (submitBtn && document.body.contains(submitBtn)) {
        submitBtn.disabled = prevBtnDisabled;
        if (submitBtn.tagName === 'INPUT') submitBtn.value = prevBtnText;
        else submitBtn.innerHTML = prevBtnText;
      }
    };

    try {
      var res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      var data = null;
      try {
        data = await res.json();
      } catch (_) {
        data = null;
      }

      var succeeded = res.ok && (!data || (data.success !== false && data.success !== 'false'));
      if (!succeeded) {
        throw new Error((data && data.message) || ('HTTP ' + res.status));
      }

      if (typeof options.onSuccess === 'function') {
        options.onSuccess({
          fields: extracted.fields,
          visitorEmail: extracted.visitorEmail,
          visitorName: extracted.visitorName,
          trekTitle: trekTitle,
          subject: subject,
          feedbackEl: feedbackEl
        });
      } else {
        restoreBtn();
        var greeting = extracted.visitorName ? 'Thank you, ' + extracted.visitorName + '! ' : 'Thank you! ';
        showStatus(
          feedbackEl,
          'is-success',
          '<strong>' + greeting + 'Your inquiry has been sent to ' + TARGET_EMAIL + '.</strong> Our Kathmandu team will reply within 4 hours.'
        );
        form.reset();
      }

      if (typeof global.gtag === 'function') {
        global.gtag('event', options.analyticsEvent || 'lead_form_submit', {
          event_category: 'lead_generation',
          event_label: sourceName
        });
      }

      return { ok: true };
    } catch (err) {
      restoreBtn();
      if (typeof options.onError === 'function') {
        options.onError(err, { fields: extracted.fields, subject: subject, feedbackEl: feedbackEl });
      } else {
        renderFallback(feedbackEl, subject, extracted.fields);
      }
      return { ok: false, error: err };
    }
  }

  function bindForm(form, options) {
    if (!form || form.dataset.nhtBound === '1') return;
    form.dataset.nhtBound = '1';
    ensureHoneyField(form);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitForm(form, options);
    });
  }

  function bindStandaloneForms() {
    var contactForm = document.getElementById('contact-page-form');
    if (contactForm) {
      bindForm(contactForm, {
        sourceName: 'Contact Page Form',
        subjectPrefix: 'Contact Page Message'
      });
    }

    var customTripForm = document.getElementById('custom-trip-form');
    if (customTripForm) {
      bindForm(customTripForm, {
        sourceName: 'Custom Trip Planner Form',
        subjectPrefix: 'Custom Trip Proposal'
      });
    }

    var leadForm = document.getElementById('lead-inquiry-form');
    if (leadForm) {
      bindForm(leadForm, {
        sourceName: 'About Us Lead Inquiry Form',
        subjectPrefix: 'About Us Trip Inquiry',
        feedbackEl: document.getElementById('inq-feedback')
      });
    }

    var inlineBooking = document.getElementById('inline-booking-form');
    if (inlineBooking) {
      bindForm(inlineBooking, {
        sourceName: 'Trek Inline Booking Form',
        subjectPrefix: 'Trek Reservation Inquiry',
        trekTitle: (document.querySelector('h1') && document.querySelector('h1').textContent.trim()) || ''
      });
    }

    document.querySelectorAll('form.trek-booking-form').forEach(function (trekForm) {
      bindForm(trekForm, {
        sourceName: 'Trek Booking Form',
        subjectPrefix: 'Trek Booking Request',
        trekTitle: trekForm.getAttribute('data-trek-title') || ''
      });
    });

    var newsletterMain = document.getElementById('newsletter-form');
    if (newsletterMain) {
      newsletterMain.removeAttribute('onsubmit');
      bindForm(newsletterMain, {
        sourceName: 'Homepage Newsletter Form',
        subjectPrefix: 'Newsletter Subscription',
        analyticsEvent: 'newsletter_signup',
        onSuccess: function (ctx) {
          showStatus(
            ctx.feedbackEl,
            'is-success',
            '<strong>Subscribed!</strong> Thank you for joining Namaste Hiking Trek updates.'
          );
          newsletterMain.reset();
        }
      });
    }

    var blogNewsletter = document.getElementById('blog-newsletter-form');
    if (blogNewsletter) {
      blogNewsletter.removeAttribute('onsubmit');
      bindForm(blogNewsletter, {
        sourceName: 'Blogs Newsletter Form',
        subjectPrefix: 'Newsletter Subscription',
        analyticsEvent: 'newsletter_signup',
        onSuccess: function (ctx) {
          showStatus(
            ctx.feedbackEl,
            'is-success',
            '<strong>Subscribed!</strong> Thank you for subscribing to Himalayan travel updates.'
          );
          blogNewsletter.reset();
        }
      });
    }
  }

  global.NamasteFormDelivery = {
    TARGET_EMAIL: TARGET_EMAIL,
    ENDPOINT: ENDPOINT,
    WHATSAPP_URL: WHATSAPP_URL,
    extractPayload: extractPayload,
    buildMailtoHref: buildMailtoHref,
    submitForm: submitForm,
    bindForm: bindForm,
    showStatus: showStatus,
    renderFallback: renderFallback
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindStandaloneForms);
  } else {
    bindStandaloneForms();
  }
})(window);
