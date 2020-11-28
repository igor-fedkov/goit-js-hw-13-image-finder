import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { notice, info, error } from '@pnotify/core';

function createNoticeNotify(text) {
  notice({
		text: text,
		sticker: false,
		minHeight: '40px',
		maxTextHeight: null,
		closer: false,
  });
}
function createInfoNotify(text) {
  info({
		text: text,
		sticker: false,
		minHeight: '40px',
		maxTextHeight: null,
		closer: false,
  });
}

function createErrorNotify(text) {
  error({
		text: text,
		sticker: false,
		minHeight: '40px',
		maxTextHeight: null,
		closer: false,
  });
}

export { createNoticeNotify, createInfoNotify, createErrorNotify };
