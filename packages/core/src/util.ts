import type { Emoji } from './options';

export type DiscordTimestamp = Date | string | null;

export const handleTimestamp = (value: DiscordTimestamp, hour24 = false): string | null => {
	if (!(value instanceof Date) && typeof value !== 'string') {
		throw new TypeError('Timestamp prop must be a Date object or a string.');
	}

	const date = new Date(value)
		.toLocaleDateString(undefined, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			hour12: !hour24
		})
		.replace(',', '');

	return hour24 ? date : date.replace(/00:(\d{2})/, '12:$1');
};

export const getGlobalEmojiUrl = (emojiName: string): Emoji | undefined => window.$discordMessage?.emojis?.[emojiName];
