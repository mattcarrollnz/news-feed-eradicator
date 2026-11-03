import { type Site, siteId, regionId } from "../types/sitelist";

export const site: Site = {
			id: siteId('youtube'),
			title: 'YouTube',
			hosts: ['www.youtube.com', 'youtube.com', 'm.youtube.com'],
			paths: ['/', '/gaming', '/podcasts'],
			regions: [
				{
					id: regionId('feed'),
					title: 'Main feed',
					selectors: [
						'ytd-browse',
						'ytm-browse .rich-grid-renderer-contents',
						'ytm-browse ytm-chip-cloud-chip-renderer:not(.more-drawer)'
					],
					paths: 'inherit',
					type: 'hide',
					inject: {
						mode: 'overlay-fixed',
						overlayZIndex: 2019,
					},
				},
				{
					id: regionId('shorts-button'),
					title: 'Shorts button',
					type: 'remove',
					paths: '*',
					selectors: [
						'ytd-guide-entry-renderer:has(a[title="Shorts"])',
						'ytd-mini-guide-entry-renderer:has(a[title="Shorts"])',
						'ytm-pivot-bar-item-renderer:has(.pivot-shorts)'
					],
				},
				{
					id: regionId('explore-nav'),
					title: 'Explore navigation menu',
					type: 'remove',
					paths: '*',
					selectors: [
						'ytd-guide-section-renderer:nth-child(4)',
						'ytm-browse ytm-chip-cloud-chip-renderer.more-drawer'
					]
				},
				{
					id: regionId('end-screen-suggested'),
					title: 'End screen suggested videos',
					paths: '*',
					type: 'remove',
					selectors: ['.ytp-fullscreen-grid'],
				},
				{
					id: regionId('sidebar-suggested'),
					title: 'Suggested videos sidebar',
					type: 'hide',
					paths: '*',
					selectors: [
						'ytd-watch-next-secondary-results-renderer',
						'ytm-single-column-watch-next-results-renderer .related-items-container',
						'ytm-single-column-watch-next-results-renderer .chip-bar',
						'ytm-single-column-watch-next-results-renderer .single-column-watch-next-modern-panels'
					],
				},
				{
					id: regionId('comments'),
					title: 'Video comments',
					type: 'hide',
					paths: '*',
					selectors: [
						'ytd-comments',
						'yt-video-metadata-carousel-view-model[aria-label="Comments"]'
					],
					default: false,
				},
				{
					id: regionId('live-chat'),
					title: 'Live chat',
					type: 'hide',
					paths: '*',
					selectors: ['ytd-live-chat-frame'],
					default: false,
				},
				{
					id: regionId('notifications'),
					title: 'Notifications',
					type: 'remove',
					paths: '*',
					selectors: ['ytd-notification-topbar-button-renderer'],
					default: false,
				},
				{
					id: regionId('subscriptions'),
					title: 'Subscriptions',
					type: 'remove',
					paths: '*',
					selectors: [
						'ytd-guide-section-renderer:nth-child(2)', 
						'ytd-mini-guide-renderer:nth-child(2)',
						'ytm-pivot-bar-item-renderer:has(.pivot-subs)'
					],
					default: false,
				},
			],
		}

export default site;
