// ==UserScript==
// @name           Star Citizen - Better Spectrum Dark Theme
// @namespace      https://github.com/rjcncpt/SpectrumDarkMode
// @version        1.0
// @description    This extension changes the appearance of Spectrum and some RSI web pages. You must have the dark mode enabled.
// @author         rjcncpt
// @match          https://robertsspaceindustries.com/*
// @match          https://*.robertsspaceindustries.com/*
// @grant          none
// @license        CC0-1.0 License
// ==/UserScript==

(function() {
    'use strict';

    // Erstelle ein <style>-Element
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
		::selection {
			background: #8cf1ff;
			color: #05111e;
		}

		::-webkit-scrollbar-track {
			width: 6px;
			height: 5px;
			background-color: #0b111a;
		}

		::-webkit-scrollbar-thumb {
			background: #597398 !important;
			border-radius: 50px;
		}

		/* Backgrounds */
		.theme-dark#app #app-header,
		.theme-dark #page #page-main .page-header .page-header-inner .actions .action.on {
			background: #335a8f;
		}

		.theme-dark .modal,
		.theme-dark #page #page-main,
		.theme-dark .search-panel .advanced-search,
		.theme-dark .forum-thread-item.is-editor-reply,
		.theme-dark .member-profile .profile-below-banner,
		.theme-dark #app-content #page.search #page-main .search-results,
		#app.theme-dark #app-content #page.lobby #page-main .messages-list,
		.theme-dark #app-content>#page.community>#page-main .community-list,
		.lobby-member-presences>.members-list .members-list-group .members-list-group-header,
		#app.theme-dark #app-content .quick-access .lobby-member-presences,
		#app.theme-dark #app-content .quick-access .lobby-member-presences .search,
		.theme-dark .quick-access-friend-request,
		.theme-dark #app-content #page.search #page-main .search-sidebar,
		.theme-dark #search-results .results-list,
		.theme-dark #app-content #page.search #page-main .search-sidebar .sidebar-search-type,
		.theme-dark #app-content #page.search #page-main .search-header,
		.theme-dark .emoji-mart,
		.theme-dark .forum-label,
		.theme-dark .c-sidebar-header,
		.theme-dark .l-sidebar__footer,
		.theme-dark .forum-editor-reply,
		.theme-dark .list-navigator .bar,
		.theme-dark .c-sidebar-navigation,
		.theme-dark .emoji-mart .emoji-mart-preview,
		.theme-dark .emoji-mart .emoji-mart-search input,
		.theme-dark .forum-thread-item-tracked-reference,
		.theme-dark #page.forum-channel .row.columns-header,
		.theme-dark .search-panel .quick-access-header-input input,
		#app.theme-dark #app-content #page.lobby .lobby-footer>.top,
		#app.theme-dark #app-content #page.lobby #page-main .lobby-header,
		#app.theme-dark #app-content #page.lobby .lobby-footer>.message-input,
		.theme-dark .list-navigator .widgets .navigation .navigation-content,
		.theme-dark .list-navigator .widgets .navigation .left-triangle:before,
		.theme-dark .emoji-mart .emoji-mart-scroll .emoji-mart-category .emoji-mart-category-label *,
		.theme-dark .member-profile .profile-topbar,
		.theme-dark .forum-editor .forum-editor-menu,
		.theme-dark .member-profile .profile-topbar button.close,
		.theme-dark .forum-editor .forum-editor-menu .menu-group.channel:before,
		.theme-dark .forum-editor .forum-editor-menu .menu-group.label:before,
		.theme-dark .forum-editor .forum-editor-menu .menu-group.role:before,
		.theme-dark .messages-list .separator .label,
		.lobby-message.lobby-message--visible.lobby-message--motd,
		.theme-dark .forum-editor-reply .forum-editor-reply-header,
		.theme-dark .forum-editor-block.text .text-controls,
		.theme-dark #notifications .notifications-main{
			background: #0b111a !important;
			background-color: #0b111a;
		}

		.theme-dark #page.forum-thread .page-content .forum-thread .forum-thread-replies .forum-thread-item.depth-odd{
			background: #101723;
		}

		#app, #react,
		.theme-dark pre,
		.theme-dark .message-media-rich,
		.theme-dark .quick-access-header,
		.theme-dark .message-media .image,
		.theme-dark .public-DraftEditor-content pre,
		.theme-dark .message-input .message-row>.input,
		.theme-dark .list-navigator .widgets button.action,
		.theme-dark .forum-editor-reply .forum-editor-core,
		.theme-dark .member-profile .profile-quick-msg textarea,
		.theme-dark #page #page-main .page-header .page-header-inner,
		.theme-dark .message-item.status-default:not(.edit-mode):hover,
		.theme-dark .message-media-rich,
		.theme-dark .message-media figure,
		.theme-dark #page.settings #page-main .settings-main .settings-sidebar,
		.theme-dark #app-content>#page.community>#page-main .community-list h3,
		.theme-dark .list-navigator .widgets .navigation .navigation-progress:before,
		.theme-dark #app-content #page.settings #page-main .settings-main .settings-content .section,
		.theme-dark #page.forum-thread .page-content .forum-thread .forum-thread-header .thread-control-bar,
		.theme-dark #page.forum-thread .page-content .forum-thread .forum-thread-replies .forum-thread-item,
		.theme-dark #page.forum-thread .page-content .forum-thread .forum-thread-empty,
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item,
		.theme-dark #page #page-main .page-header .page-header-inner .actions .action,
		aside.quick-access--open.search-results .search-panel,
		.theme-dark .forum-editor-block.text.focus,
		.theme-dark .l-sidebar__body,
		.theme-dark .breadcrumb,
		.theme-dark .c-annotation-block--thread{
			background-color: #151f2e;
		}

		.theme-dark .sidebar-list .sidebar-item.active,
		.theme-dark button.select,
		.theme-dark .sidebar-list .sidebar-item:hover:not(.active),
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item:hover{
			background-color: rgb(30 44 65);
		}

		.theme-dark .content-block:not(.text) {
			background-color: rgba(11, 17, 26, .5);
		}

		.theme-dark #app,
		.theme-dark #react,
		.theme-dark #app-content #page.settings #page-main .settings-main .settings-content,
		.theme-dark .c-sidebar-private-messages-search__input,
		.theme-dark .c-sidebar-private-messages-search__input:focus,
		.theme-dark #page.forum-channel .row,
		#app #app-content #page.lobby #page-main .messages-list .message-item,
		.page-search-results #search-results .results-list > div,
		.page-search-results #search-results .results-list > a{
			background: #101824;
			background-color: #101824;
		}
		.theme-dark #page.forum-channel .row:hover {
			background: #151f2f;
		}
		.theme-dark #page.forum-channel .row.thread:not(.unread){
			background-color: #141f2f !important;
		}

		.theme-dark .forum-thread-item>.gutter .gutter-highlight-label{
			background-color: rgb(239 191 96) !important;
			background: rgb(239 191 96) !important;
		}
		/* backgrounds end */

		/* borders */
		.theme-dark pre,
		.theme-dark .emoji-mart,
		.theme-dark .message-item,
		.theme-dark .quick-access,
		.theme-dark .message-media,
		.theme-dark .forum-editor-reply,
		.theme-dark .list-navigator .bar,
		.theme-dark .content-block:not(.text),
		.theme-dark .c-sidebar-list-body:after,
		.theme-dark #page-main .community-info,
		.theme-dark .forum-thread-item button.vote,
		.theme-dark .public-DraftEditor-content pre,
		.theme-dark .emoji-mart .emoji-mart-search input,
		.theme-dark .list-navigator .widgets button.action,
		.theme-dark #page.forum-channel .row.columns-header,
		.theme-dark #page.forum-channel .row:not(:last-child),
		.theme-dark #page #page-main .page-header .page-header-inner,
		.theme-dark .forum-thread-item.style-type-small:not(.depth-0),
		#app.theme-dark #app-content #page.lobby #page-main .lobby-header,
		.theme-dark .list-navigator .widgets .navigation .left-triangle:before,
		.theme-dark .member-avatar .avatar-badges .avatar-badge:not(:last-child),
		.theme-dark .forum-thread-item>.content .content-footer>.actions>.group,
		.theme-dark #app-content>#page.community>#page-main .community-list ul .community-item,
		.theme-dark #app-content>#page.community>#page-main .community-list.community-list-lobbies .community-item:first-child,
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item,
		.theme-dark #app-content #page.search #page-main .search-sidebar,
		.theme-dark .search-result-content,
		.theme-dark #app-content #page.search #page-main .search-header,
		.theme-dark #app-content #page.search #page-main .search-sidebar .sidebar-communities,
		.theme-dark #app-content #page.search #page-main .search-sidebar .sidebar-search-type .search-filters-title,
		.theme-dark #app-content #page.search #page-main .search-sidebar .sidebar-search-type,
		.theme-dark .quick-access-friend-request,
		.theme-dark .quick-access-friend-request:not(:last-child),
		.theme-dark .forum-editor .forum-editor-menu .menu-group.dropdown{
			border-color: #1a2638;
		}
		.theme-dark .forum-editor .forum-editor-menu{
			border-bottom-color: #1a2638;
		}

		.theme-dark button.vote.active,
		.theme-dark .action-button--outline,
		.theme-dark #sidebar .member-presence-menu-popout .popout-item:not(:last-child) {
			border-color: rgb(42 69 106);
		}

		.theme-dark .member-profile .profile-topbar button.close:before {
			border-color: transparent #0b111a transparent transparent;
		}

		.theme-dark .reaction,
		.theme-dark button.select,
		.theme-dark button.select.active,
		.theme-dark .member-avatar .avatar,
		.theme-dark .forum-thread-item .action,
		.theme-dark .member-avatar .avatar-badges,
		.search-result-content .result-author .avatar,
		.theme-dark .forum-thread-item-tracked-reference,
		.theme-dark .content-block.image .content-block-media,
		.theme-dark #page-main .community-info .community-avatar,
		.theme-dark .item-selector-member .member-avatar .avatar,
		.theme-dark .forum-thread-item .forum-actions-button>.btn,
		.theme-dark .sidebar-list .sidebar-item>.column.avatar>a,
		.theme-dark #page.forum-channel .row .column.subject .subject-media-preview,
		.forum-thread-item>.content .content-header>.left .member-avatar .avatar,
		#page.forum-channel .row .column.last-activity>.member .member-avatar .avatar,
		.lobby-member-presences>.members-list .lobby-presence-item .member-avatar .avatar,
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item .item-avatar,
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item .item-actions .menu,
		.theme-dark .member-profile {
			border: 0;
		}
		.theme-dark #page #page-main .page-header .page-header-inner .actions .action {
			border-color: #151f2e;
		}
		.theme-dark .forum-editor .forum-editor-menu .menu-group.channel:before,
		.theme-dark .forum-editor .forum-editor-menu .menu-group.label:before,
		.theme-dark .forum-editor .forum-editor-menu .menu-group.role:before{
			border-right: 1px solid #1a2638;
			border-top: 1px solid #1a2638;
		}
		#react {
			border-color: #194967!important;
		}

		#page.forum-thread .page-content .forum-thread .forum-thread-header .thread-control-bar,
		#page.forum-thread .page-content .forum-thread .forum-thread-replies .forum-thread-item.depth-0,
		.theme-dark .forum-thread-item.style-type-small:not(.depth-0),
		.theme-dark .quick-access-header,
		.theme-dark .messages-list .separator .label,
		.search-panel .quick-access-header,
		.page-search-results #search-results .results-list > div,
		.notifications-main .notifications-item,
		#page.forum-channel .row,
		.message-item.status-default,
		.message-item.status-default.type-small,
		.message-item.status-default.last-was-small,
		.message-item.status-default.type-small.last-was-small,
		.lobby-message__wrapper{
			border-radius: 10px;
		}
		/* borders end */

		/* font-size */
		.quick-access-header .online-count,
		.breadcrumb .trail .breadcrumb-link,
		#page.forum-channel .row .column.subject .new-activity-dot,
		.sidebar-list .sidebar-item>.column.notification>.unread-flag,
		.forum-thread-item.style-type-small .content-block.text,
		.message-item>.content>.bottom .body{
			font-size: 1rem;
		}

		.member-profile .profile-quick-msg textarea,
		#page.forum-channel .row .column.last-activity>.member .member-name,
		.probation-wrapper .error-message.probation,
		.theme-dark #page.forum-channel .row .column.subject .new-replies-link{
			font-size: .8em;
		}
		/* font-size end */

		/* font-weight */
		.lobby-member-presences>.members-list .lobby-presence-item .member-presence-info{
			font-weight:400;
		}
		.theme-dark .message-item>.content>.top .member-name span.displayname,
		.message-item>.content>.top .member-name span.displayname {
			font-weight: 600;
		}
		.theme-dark .reaction .count,
		.theme-dark button.vote .count,
		.theme-dark .quick-access-header .online-count,
		.sidebar-list .sidebar-item.unread .column.content a,
		.theme-dark .messages-list .separator.new-messages.faded,
		.theme-dark .messages-list .separator.new-messages.faded .new-messages .label,
		.theme-dark .messages-list .separator .label,
		.forum-thread-item .forum-thread-subject{
			font-weight:600;
		}
		/* font-weight end */

		/* Colors */
		.message-item>.content>.bottom .body a,
		[data-orion-skin] .a-breadcrumbItem__link,
		[data-orion-skin].a-breadcrumbItem__link,
		.c-sidebar-copyright__links a,
		.theme-dark .search-panel .advanced-search,
		.forum-thread-item>.content .content-header>.left>.forum-thread-member-info .member-name span.nickname{
			color: #5ea9d8;
		}
		.message-item>.content>.bottom .body a:hover,
		[data-orion-skin] .a-breadcrumbItem__link,
		[data-orion-skin].a-breadcrumbItem__link,
		.c-sidebar-copyright__links a:hover {
			color: #6bb2db;
		}

		.theme-dark .content-block.text,
		.theme-dark .content-block.text h1,
		.theme-dark .content-block.text h2,
		.theme-dark .content-block.text h3,
		.theme-dark .public-DraftEditor-content h1,
		.theme-dark .public-DraftEditor-content h2,
		.theme-dark .public-DraftEditor-content h3,
		.theme-dark .c-sidebar-list-header__title,
		.theme-dark .message-item>.content>.bottom .body,
		.theme-dark .member-profile .profile-stats-label,
		.theme-dark .sidebar-list .sidebar-item>.column.content>a,
		.theme-dark #page.forum-channel .row.columns-header .column,
		.theme-dark #page.forum-channel .row.thread .column.stats .count,
		#app.theme-dark #app-content .quick-access .lobby-member-presences>.members-list .lobby-presence-item .member-name,
		.theme-dark #app-content>#page.community>#page-main .community-list ul .community-item .default-link .description,
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item .item-details strong,
		.theme-dark #notifications .notifications-main .notifications-list .notifications-item .item-details .item-text,
		.theme-dark .search-result-content .result-body,
		.theme-dark .c-sidebar-header-name,
		.theme-dark .c-sidebar-header__content-user-alias,
		.rsi-markup .segment .content p,
		.rsi-markup .segment .content ul li,
		.theme-dark .c-sidebar-copyright__content,
		.theme-dark .c-sidebar-list__empty,
		.theme-dark .c-sidebar-copyright .icon,
		.theme-dark .c-annotation-block--thread,
		.c-sidebar-list-header-action__icon use,
		.theme-dark #search-results .results-list .results-message,
		.theme-dark #page.forum-channel .channel-header .actions .create .icon use,
		.c-sidebar-copyright .icon use,
		#page.forum-channel .row .column.last-activity>.member .member-name,
		.theme-dark .c-sidebar-private-messages-search__input,
		.theme-dark .c-sidebar-private-messages-search__input:focus,
		.theme-dark .message-item>.content>.top .member-name span.displayname,
		.theme-dark .forum-thread-item>.content .content-header .left .forum-thread-time-created,
		.theme-dark .forum-thread-item>.content .content-header .left>.forum-thread-member-info span.displayname,
		[data-orion-skin] .a-productHomeProductLogo svg,
		[data-orion-skin].a-productHomeProductLogo svg{
			color: #ddedf7!important;
			fill: #ddedf7!important;
		}

		a.thread-subject[style],
		span.displayname[style],
		.c-sidebar-header__avatar--away,
		.theme-dark .member-presence.away use,
		#sidebar .member-presence-menu-button.away,
		.theme-dark .sidebar-list .sidebar-item>.column.notification>.count,
		.theme-dark .sidebar-list .sidebar-item>.column.notification>.unread-flag,
		.theme-dark .forum-thread-item>.content .forum-thread-subject {
			color: rgb(239 191 96) !important;
			fill: rgb(239 191 96) !important;
		}
		/* Colors end */

		/* Search box */
		.theme-dark #search-results .results-list .results-message {
			background-image: none;
			background: #151f2e;
		}
		/* Search box */

		/* buttons, reactions, icons */
		.theme-dark .search-panel .quick-access-header-input button {
			background: #0b111a;
		}
		.theme-dark button.bookmark,
		.theme-dark .notification-subscription>button,
		button.bookmark{
			fill: #6b88b0;
		}

		.theme-dark button.bookmark.active>svg>use,
		.theme-dark .notification-subscription.active>button>svg>use {
			fill: rgb(239 191 96) !important;
			stroke: rgb(239 191 96) !important;
		}

		.reaction,
		div.button-group-selector button,
		.theme-dark .forum-thread-item .action,
		.theme-dark .forum-thread-item-tracked-reference,
		.theme-dark .forum-thread-item .forum-actions-button>.btn {
			padding: 7px 10px 6px 10px;
			height: 30px;
		}

		.forum-thread-item .forum-actions-button {
			height: 30px;
		}

		.theme-dark button.vote,
		.theme-dark .forum-thread-item .action {
			background-color: #131a26;
			border-color: #1b2536;
		}
		.theme-dark button.vote.disabled,
		.theme-dark button.vote.disabled:hover:not(.no-border) {
			background-color: #1a2435;
			border-color: #212e43;
		}

		.theme-dark .item-selector .wrapper.selected,
		.theme-dark .item-selector .wrapper {
			background-color: #161f2d;
			border: 1px solid #242e40;
		}

		.theme-dark .item-selector .wrapper .action {
			border-left: 1px solid #242e40;
		}

		.theme-dark button.vote:hover,
		.theme-dark .action-button--outline:hover {
			background-color: #2a456a !important;
			border-color: #4c80b7 !important;
		}

		.theme-dark .reaction {
			border-color: #4c80b7;
			background-color: #152438;
		}

		.theme-dark .reaction .count {
			color: #ddddd1;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item.highlighted .reaction {
			border-color: #4c80b7;
			background-color: #0a1525;
		}

		.theme-dark #page.forum-thread .page-content .forum-thread .forum-thread-replies .forum-thread-item.is-highlighted-staff {
			border-left: 5px solid #efbf60;
			padding: 30px 25px 30px 25px;
		}

		.theme-dark .reaction.active {
			border-color: #4c80b7;
			background-color: #2a456a;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item.highlighted .reaction.active {
			border-color: #4c80b7;
			background-color: #223c63;
		}

		button.vote.vertical,
		.forum-thread-item .toggle-collapse-gutter,
		.forum-thread-item.style-type-small>.gutter {
			width: 35px;
		}

		.action-button,
		.action-button--size-s {
			height: 35px;
			margin-left: 10px;
		}

		.action-button--outline {
			padding: 3px 15px;
			padding: 3px 10px;
		}

		.theme-dark #page.forum-channel .channel-header .actions .create {
			background: #346a2a;
			color: #fff;
			height: 30px;
		}

		.theme-dark #page.forum-channel .channel-header .actions .create:hover {
			background: #408334;
		}

		.forum-thread-item>.content .content-header>.right .actions {
			top: 0;
			height: 40px;
		}

		.action-button,
		.action-button--size-s {
			height: 25px;
		}

		.action-button__icon+.action-button__label {
			display: none;
		}
		.forum-editor-block.text .text-controls{
			padding: 10px 5px;
		}
		.c-annotation-block__icon {
			border-right: 0;
			margin-right: 0px;
		}
		/* buttons, reactions, icons */

		/* SEARCH RESULTS */
		.search-result-content {
			border: 1px solid #c3cfdd;
			border-top: 0;
			border-left: 0;
		}

		.search-result-content:hover {
			background: #161f2d !important;
		}

		.page-search-results #search-results .results-list {
			-webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, .2);
			box-shadow: 0 0 8px 0 rgba(0, 0, 0, .2);
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
		}
		#app-content #page.search #page-main .page-search-results{
			margin: 10px;
		}

		.page-search-results #search-results .results-list > a,
		.page-search-results #search-results .results-list > div {
			flex: 1 0 calc(33.333% - 10px);
			box-sizing: border-box;
			overflow-wrap: anywhere;
		}

		.search-result-content .jump {
			padding: 8px 8px;
		}

		.theme-dark .search-result-content .result-body {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		/* SEARCH RESULTS END */

		#sidebar .member-presence-menu-popout .popout-item {
			padding: 10px;
		}

		#sidebar .member-presence-menu-popout .popout-item.active .checkmark,
		#sidebar .member-presence-menu-popout .popout-item .icon.arrow {
			margin-right: 5px;
		}

		[aria-label="™️, tm"] {
			filter: invert(1) !important;
		}

		/* status */
		.theme-dark #sidebar .member-presence-menu-popout {
			border: 1px solid #101824;
		}

		.theme-dark #sidebar .member-presence-menu-popout .popout-item,
		.theme-dark #sidebar .member-presence-menu-popout .popout-item .icon use {
			color: rgb(255 255 255 / 65%);
		}

		.c-sidebar-header__avatar--online,
		.theme-dark .member-presence.online use,
		#sidebar .member-presence-menu-button.online,
		[data-orion-skin] .a-icon.-presenceOnline {
			fill: #39c98f;
			color: #39c98f;
		}

		.c-sidebar-header__avatar--paying,
		.theme-dark .member-presence.playing use,
		#sidebar .member-presence-menu-button.paying {
			fill: #bc97e9;
		}

		.theme-dark .member-presence.offline use,
		.c-sidebar-header__avatar--do_not_disturb,
		#sidebar .member-presence-menu-button.do_not_disturb {
			fill: #313f54;
		}

		.theme-dark .quick-access-header .online-count {
			color: #39c98f;
		}

		.lobby-member-presences>.members-list .lobby-presence-item .member-presence-info {
			font-style: normal;
			color: #bc97e9;
			margin-top: -3px;
		}

		.theme-dark .thread-flag {
			text-indent: -9000em;
		}

		.theme-dark .thread-flag.pinned.thread-flag-label {
			padding-right: 2px;
		}

		#page.forum-channel .row .column.subject .subject-content .thread-subject {
			display: contents;
		}

		.theme-dark .thread-flag.thread-flag-label .icon use {
			fill: #d6dee3;
		}

		.theme-dark .thread-flag.thread-flag-label {
			background-color: #243249;
			color: #d6dee3;
		}

		/* status end */

		/* Error Message */
		.probation-wrapper .error-message.probation {
			position: fixed;
			max-width: 430px;
			bottom: 1%;
			left: 1%;
		}

		.error-message {
			background: url(https://cdn.robertsspaceindustries.com/static/images/signin_modal_error.png) no-repeat 7px 50% rgb(153 0 0) color:#fff;
		}

		.error-message strong {
			color: white;
		}

		.probation-wrapper {
			display: flex;
			justify-content: flex-start;
		}

		.page-wrapper .wrapper .error-message.probation {
			display: none !important;
		}
		/* Error Message end */

		/* avatars */
		.avatar img,
		.member-avatar .avatar,
		.theme-dark .member-avatar .avatar,
		.forum-thread-item>.gutter .member-avatar .avatar,
		.theme-dark #page-main .community-info .community-avatar,
		.theme-dark .sidebar-list .sidebar-item>.column.avatar>a,
		.search-result-content .result-author .avatar,
		#notifications .notifications-main .notifications-list .notifications-item .item-avatar,
		#app-content #page.search #page-main .search-sidebar .sidebar-communities .community-button .avatar,
		.theme-dark .c-sidebar-navigation-item--active,
		.theme-dark .c-sidebar-navigation-item--selected,
		.theme-dark .c-sidebar-navigation-item,
		.c-sidebar-navigation-item-avatar,
		#page.forum-channel .row .column.tracked-posts .tracked-posts-btn {
			border-radius: 50%;
		}

		.theme-dark .member-avatar .avatar {
			width: 56px;
			height: 56px;
		}

		.theme-dark .member-avatar .avatar-badges {
			margin-top: 10px;
		}

		.forum-thread-item>.content .content-header>.left .member-avatar .avatar {
			width: 56px;
			height: 56px;
			margin-top: 0px;
		}

		#notifications .notifications-main .notifications-list .notifications-item .item-avatar {
			width: 34px;
			height: 34px;
		}

		.c-sidebar-header__avatar {
			padding-left: 10px;
			width: 55px;
		}

		.lobby-member-presences>.members-list .lobby-presence-item .member-avatar .avatar {
			height: 27px;
		}

		#page.forum-channel .row .column.last-activity>.member .member-avatar .avatar {
			width: 26px;
			height: 26px;
		}

		#page.forum-channel .row .column.last-activity>.member .member-avatar .avatar[style] {
			border-color: rgb(239 191 96) !important;
			border: 2px solid;
		}

		.forum-thread-item>.gutter .member-avatar .avatar {
			width: 100px;
			height: 100px;
		}
		/* avatars end */

		/* notifications */
		[data-orion-skin] .a-notificationBadge__label {
			background-color: rgb(255 212 0);
		}
		[data-orion-skin] .a-fontStyle.-body-4{
			font-size: var(--orion2-body-4-font-size)!important;
		}
		#notifications .notifications-main .action-button .icon {
			width: 10px;
			height: 15px;
		}
		#notifications .notifications-main .notifications-list {
			display: flex;
			flex-direction: column;
			overflow-y: auto;
			flex: 1 1 auto;
			scrollbar-width: none; /* Firefox */
			-ms-overflow-style: none; /* Internet Explorer 10+ */
		}

		#notifications .notifications-main .notifications-list::-webkit-scrollbar {
			display: none; /* Safari und Chrome */
		}
		#notifications .notifications-main .notifications-list .notifications-item .item-details .item-timestamp {
			margin-top: 10px;
		}
		/* notifications */

		#app #app-content #page{
			border-radius: 10px 0px 0 0; /* Radius top left */
		}
		.theme-dark .c-sidebar-navigation{
			border-radius: 0px 10px 0 0; /* Radius top right */
		}
		.theme-dark .c-sidebar-navigation-item,
		.theme-dark .c-sidebar-navigation-item a:hover{
			box-shadow: none;
		}
		.theme-dark .forum-thread-item>.content .content-header>.left>.forum-thread-member-info .member-name span.displayname .nickname {
			color: inherit;
		}

		.message-item>.content>.bottom .body {
			line-height: 1.5em;
		}

		.content-block.text h1,
		.public-DraftEditor-content h1 {
			margin-top: 25px;
		}

		.public-DraftEditor-content blockquote,
		blockquote {
			margin: 10px 0 10px 10px;
		}

		#app #app-header a.logo {
			position: relative !important;
		}

		.theme-dark#app {
			margin: 0 auto;
		}

		.role-badge .badge-icon {
			padding-top: 0px;
		}

		.theme-dark .member-profile .profile-badges .profile-badge:not(:last-child) {
			margin-top: -2px;
		}

		.theme-dark #page.forum-channel .row .column.subject .subject-media-preview {
			background: transparent;
			align-self: center;
		}

		#page.forum-channel .row .column.subject .subject-media-preview {
			width: 90px;
			height: auto;
		}

		#page.forum-channel .row .column.subject .subject-media-preview img {
			border-radius: 5px;
		}

		#page.forum-channel .row .column.subject .subject-media-preview .subject-media-preview-overlay {
			top: 15px;
			left: 30px;
			margin-left: 0;
			margin-top: 0;
		}

		.theme-dark #page.forum-channel .row .column.subject .new-replies-link {
			border-color: #101824;
		}

		.sidebar-list .sidebar-item.unread .column.content a {
			color: rgb(223 217 193) !important;
		}

		.tracked-posts-btn[style] {
			border-color: rgb(239 191 96) !important;
		}

		#page.forum-channel .row .column.subject .new-replies-link .icon {
			width: 15px;
			height: 15px;
		}

		#page.forum-channel .row .column.subject .subject-media-preview .default-preview {
			display: none;
		}

		.messages-list .separator {
			border-top: 2px solid #e1e1e1;
			border-color: #0b111a !important;
		}

		.c-sidebar-list-header__title{
			text-transform: inherit;
		}

		.theme-dark .messages-list .separator.new-messages.faded,
		.theme-dark .messages-list .separator.new-messages.faded .new-messages .label,
		.theme-dark .messages-list .separator .label {
			color: #fff !important;
			border-color: rgb(11 17 26);
		}

		.messages-list .separator.new-messages {
			border-top: 2px solid #0b111a;
		}

		.theme-dark .messages-list .separator .label {
			padding: 10px 0;
		}

		.theme-dark .messages-list .separator .label {
			padding: 10px;
			text-transform: uppercase;
		}

		.theme-dark .member-profile .profile-badges {
			background: transparent;
			border: 0;
		}

		.member-profile .profile-below-banner {
			padding: 8px 14px;
		}

		.member-profile .profile-member-nickname {
			margin-top: 4px;
			margin-left: -3px;
		}

		.member-profile .profile-banner .profile-banner-content {
			margin-bottom: 10px;
		}

		.l-sidebar {
			grid-template-rows: 79px auto 70px;
		}

		.theme-dark .c-sidebar-header {
			padding: 10px 0 10px 0;
			align-items: center;
			height: fit-content;
		}

		#app #app-content #page.lobby #page-main .lobby-header-messages {
			padding: 0 25px 10px;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item {
			padding-top: 13px;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item.highlighted {
			background: #1a2535;
			border-left: 5px solid #efbf60;
			padding: 30px 25px 30px 25px;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item.type-small {
			padding: 0px 25px 15px 25px;
		}
		#app #app-content #page.lobby #page-main .messages-list .message-item.type-small.highlighted {
			padding: 0px 25px 15px 25px;
		}
		.theme-dark .quick-access{
			border:0px;
		}
		.theme-dark .quick-access-header{
			margin: 10px 10px;
		}
		.search-panel .quick-access-header{
			margin: 0px 0px;
		}
		.page-search-results #search-results .results-list > div{
			margin: 0px;
		}
		.notifications-main .notifications-item,
		#page.forum-channel .row,
		.message-item.status-default{
			margin: 0px 10px 10px 10px;
		}
		.message-item.status-default{
			margin: 10px 10px 0px 10px;
		}
		.message-item.status-default.type-small{
			margin: -15px 10px 0px 10px;
		}
		.message-item.status-default.last-was-small{
			margin: 10px 10px 0px 10px;
		}
		.message-item.status-default.type-small.last-was-small{
			margin: -15px 10px 0px 10px;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item.highlighted .theme-dark .reaction {
			background-color: #0d151e;
		}

		#app #app-content #page.lobby #page-main .messages-list .message-item.highlighted .theme-dark .reaction.active {
			background-color: #2a4167;
		}

		.theme-dark .message-item>.content>.top .member-name span.displayname,
		.message-item>.content>.top .member-name span.displayname {
			font-size: 1.1em;
		}

		.message-item>.gutter {
			width: 60px;
		}

		.message-input .message-row>.input>.emoji-mart {
			width: 324px !important;
		}

		.theme-dark .emoji-mart .emoji-mart-anchor:hover,
		.theme-dark .emoji-mart .emoji-mart-anchor-selected {
			color: #39c98f;
		}

		.emoji-mart-category .emoji-mart-emoji span {
			width: 26px !important;
			height: 26px !important;
		}

		#page.forum-channel .row.columns-header .column .btn.refresh {
			height: 30px;
		}

		#page.forum-channel .row .column.last-activity {
			width: 15%;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			width: 130px;
			flex-shrink: 0;
			word-wrap: break-word;
			flex-direction: column;
		}
		#page.forum-channel .row .column.last-activity>.member>.erased, #page.forum-channel .row .column.last-activity>.time-created{
			margin-left: 32px;
			margin-top: -8px;
		}

		#page.forum-channel .row .column.last-activity>.member {
			margin-bottom: 0px;
			-webkit-box-align: center;
			align-items: flex-start;
			-ms-flex-align: center;
		}

		#page.forum-channel .row .column.last-activity>.member .member-name {
			max-width: 14ch;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		#page.forum-channel .row .column.stats {
			width: 9%;
			padding-right: 20px;
		}

		#page.forum-channel .row .column.vote {
			min-width: 100px;
		}

		#page.forum-channel .row .column.tracked-posts .tracked-posts-btn {
			border: 2px solid;
			height: 20px;
		}

		.tracked-posts-btn,
		#app #app-content #page.lobby #page-main .messages-list .message-item.highlighted .avatar img {
			animation: pulse-animation 2s infinite;
		}

		@keyframes pulse-animation {
			0% {
				box-shadow: 0 0 0 0px rgba(222, 195, 66, .2);
			}

			100% {
				box-shadow: 0 0 0 20px rgba(222, 195, 66, 0);
			}
		}


		#page.forum-channel .row .column.tracked-posts img {
			display: none;
		}

		#page.forum-channel .channel-header .info .info-header .current-label .label-name {
			padding: 8px 5px 8px 9px;
		}

		#page.forum-channel .channel-header .info .info-header .current-label .bookmark {
			margin-top: 6px;
		}

		#app-content>#page.community>#page-main .community-list ul .community-item .top .default-link>.name .bookmark {
			width: 17px;
			height: 18px;
		}

		.theme-dark button.bookmark>svg>use,
		.theme-dark .notification-subscription>button>svg>use{
			stroke: #6b88b0;
		}
		button.bookmark>svg>use,{
			stroke-width: 3px;
		}

		#app-content>#page.community>#page-main .community-list ul li.group h3 {
			border-radius: 5px;
			margin-left: 10px;
		}

		#app-content>#page.community>#page-main .community-list h3 {
			padding: 11px 25px 11px 25px;
		}

		.theme-dark .forum-label {
			color: #82acc3;
		}

		.theme-dark #app-content>#page.community>#page-main .community-list ul .community-item .default-link .description {
			color: #d6e3eb;
			line-height: 1.5em;
		}

		.theme-dark #app-content>#page.community>#page-main .community-list ul .community-item .default-link {
			color: #8fc2ef;
		}

		.lobby-member-presences>.members-list {
			opacity: .4;
		}

		.lobby-member-presences>.members-list:hover {
			opacity: 1;
			animation-name: fadeInOpacity;
			animation-iteration-count: 1;
			animation-timing-function: ease-in;
			animation-duration: .2s;
		}

		.lobby-message.lobby-message--motd{
			--lobby-message-max-height: auto;
		}
		.lobby-message.lobby-message--broadcast,
		.lobby-message.lobby-message--visible.lobby-message--motd {
			overflow: inherit;
			border-radius: 5px;
			margin-left: -15px;
			margin-right: -12px;
			--lobby-message-background-color: #6b5800;
			--lobby-message-border-color: #cfb435;
		}

		.lobby-message.lobby-message--visible.lobby-message--motd {
			--lobby-message-border-color: #0b111a;
		}
		.lobby-message--overlay .lobby-message__body:after{
			background: linear-gradient(0deg, #152c4f 20%, transparent);
		}

		.lobby-message__wrapper {
			padding: 10px 14px;
			border: 2px solid #203f6f;
			background-color: #152c4f;
		}

		.lobby-message__dismiss {
			align-items: flex-start;
			border-left: 2px solid #203f6f;
			top: 8px;
			min-height: -webkit-fill-available;
			height: fit-content;
		}

		.lobby-message__dismiss svg:hover {
			fill: #e90c0c;
		}

		#app #app-content #page.lobby #page-main .lobby-header:not(.more-info-open) .lobby-header-messages {
			width: 40%;
			left: inherit;
		}

		@media (max-width:500px) {
			#app #app-content #page.lobby #page-main .lobby-header:not(.more-info-open) .lobby-header-messages {
				width: 100%;
			}

			.sidebar-list .sidebar-item>.column.content>a {
				font-size: 1em;
			}

			#page.forum-channel .threads-list .row .column.subject .thread-subject {
				font-size: 1em;
			}

			#page.forum-thread .page-content .forum-thread .forum-thread-header .thread-control-bar {
				padding: 12px 10px 12px 10px;
			}

			#page.forum-thread #page-main .page-content .forum-thread-item {
				margin: 0 10px 0 10px;
			}
		}

		@keyframes fadeInOpacity {
			0% {
				opacity: .4;
			}

			100% {
				opacity: 1;
			}
		}

		@-webkit-keyframes fadeInOpacity {
			0% {
				opacity: .4;
			}

			100% {
				opacity: 1;
			}
		}

		.theme-dark pre,
		.theme-dark .public-DraftEditor-content pre {
			color: #e8eaf0;
		}

		.message-item>.content>.bottom .reactions {
			margin-top: 5px;
		}

		.member-profile .profile-badges .profile-badge img {
			width: 18px;
			height: 18px;
		}
		#page.forum-thread .page-content .forum-thread .forum-thread-header{
			margin: 15px 12px;
		}
		#page.forum-thread .page-content .forum-thread .forum-thread-replies .forum-thread-item.depth-0{
			margin: 0 12px 15px;
		}
		#page.forum-thread .page-content .forum-thread .forum-thread-header .thread-control-bar {
			padding: 12px 12px 12px 13px;
		}

		.forum-thread-item>.gutter .gutter-sc-logo .icon {
			width: 272px;
			height: 250px;
			opacity: .08;
		}

		.forum-thread-item .toggle-collapse-gutter .toggle-collapse {
			padding: 1px 10px;
		}

		.forum-thread-item.style-type-small {
			padding: 10px 0 10px 38px;
		}

		.forum-thread-item>.gutter {
			width: 100px;
			top: 4px;
		}

		.forum-thread-item>.gutter .gutter-highlight-label {
			left: -25px;
			padding: 5px 10px 5px 25px;
		}

		.forum-thread-item.style-type-large.is-highlighted>.content>.content-main>.content-header>.left {
			margin-top: 0px;
		}

		.forum-thread-item .forum-thread-subject {
			margin-left: -2px;
		}

		.forum-thread-item .action.icon-only>.flex>.icon {
			height: 16px;
		}

		.content-block:first-child {
			margin-top: 20px;
		}

		#page.forum-channel .channel-header{
			margin: 10px!important;
			padding: 0 0 20px!important;
		}
		#page.forum-channel .row.columns-header.sticky.active{
			border-radius: 0;
			margin: 0 0 10px;
		}
		#page.forum-channel .threads-list{
			margin-right: 20px;
		}
		.theme-dark #page.forum-channel .row.columns-header {
			height: 40px;
		}

		#page.forum-channel .row .column.label {
			text-align: center;
		}

		.theme-dark #page.forum-channel .row.columns-header .column .btn.refresh {
			animation: 2s linear 0s infinite normal forwards;
			-webkit-animation: blink-animation 2s linear 0s infinite normal forwards;
		}

		@keyframes blink-animation {
			0% {
				opacity: 1;
			}

			10% {
				opacity: 0.2;
			}

			11% {
				opacity: 1;
			}
		}

		@-webkit-keyframes blink-animation {
			0% {
				opacity: 1;
			}

			10% {
				opacity: 0.2;
			}

			11% {
				opacity: 1;
			}
		}

		@media only screen and (max-width:999px) {
			.theme-dark .content-block:not(.text) {
				width: 49%;
			}
		}

		@media only screen and (max-width:500px) {
			.theme-dark .content-block:not(.text) {
				width: 98%;
			}
			[data-orion-skin] .a-grid__inside {
				padding-inline: 0px;
			}
			[data-orion-skin] .o-navigationHead__content, [data-orion-skin].o-navigationHead__content {
				padding: .125rem .625rem;
			}
			#page.forum-thread #page-main .page-content .forum-thread-item {
				margin: 0 20px 0 20px;
			}
			#page.forum-channel .row .column.tracked-posts .tracked-posts-btn {
				border: 2px solid;
				height: 1px;
				width: 1px;
			}
		}

		/* */
		.wrapper .rsi-markup {
			background: none;
		}

		.wrapper .content-block1 {
			padding: 0px;
		}

		.wrapper .rsi-markup .segment .content p {
			max-width: fit-content;
			width: fit-content;
		}

		.wrapper .rsi-markup .segment .content ul {
			padding: 0 0 5% 5%;
		}

		/* Black Hole Page */
		.errorFallback-message {
			padding-top: 300px;
			width: 800px;
			background-size: inherit;
		}
		/* Black Hole Page end */
		/*
		[class*=Release__Wrapper-sc]{}
		*/

		/* RSI Start page */

		/* Header */
		[data-orion-skin] .o-navigationHead,
		[data-orion-skin].o-navigationHead,
		[data-orion-skin] .m-breadcrumb{
			background: rgb(21 31 46);
		}
		#react {
			border-color: #151f2e;
		}

		/* Notification */
		.l-notification-bar {
			width: 30%;
			position: fixed;
			bottom: 0;
			left: calc(-100px + -22%);
		}

		.l-notification-bar:hover {
			left: 0;
			transition: left 0.3s ease-in-out;
		}

		.l-notification-bar:not(:hover) {
			left: calc(-100px + -22%);
			transition: left 0.3s ease-in-out;
		}
		.c-notification__button {
			color: #fff;
		}

		@media only screen and (max-width:1400px) {
			.c-notification__inner {
				padding: 0 40px 0 40px;
			}
		}

		@media only screen and (max-width:1023px) {
			.l-notification-bar {
				width: 100%;
				left: 0;
				bottom: 0px !important;
			}

			.c-notification__inner {
				padding: 0 40px 0 40px;
			}
		}

		@media only screen and (max-width:500px) {
			.c-notification__inner {
				padding: 0 40px 0 40px;
			}
		}

		.c-notification__inner {
			padding: 25px 34px 25px 35px;
			display: block;
			width: 100%;
		}

		.c-notification__content,
		.c-notification__actions {
			display: flex;
			width: 100%;
		}

		.c-notification__content {
			margin-bottom: 15px
		}

		.c-notification__actions {
			justify-content: flex-start;
		}

		.c-notification__message {
			color: #d2f0ff;
		}

		[data-orion-skin] .m-navigationSubBlock.-use2Columns, [data-orion-skin].m-navigationSubBlock.-use2Columns {
			width: max-content;
		}
		[data-orion-skin] .m-navigationSubBlock__content, [data-orion-skin].m-navigationSubBlock__content {
			gap: 5px;
			margin-top: 10px;
		}
		[data-orion-skin] .m-navigationSubItem, [data-orion-skin].m-navigationSubItem {
			background-color: rgb(25 68 95);
			padding: 20px;
			border-radius: 10px;
		}
		[data-orion-skin] .m-navigationSubItem__description, [data-orion-skin].m-navigationSubItem__description {
			color: rgb(158 196 219);
		}

		/* Notification */

		/* Profil box */
		[data-orion-skin] .orion-beta-c-box.-background-surface_0,
		[data-orion-skin].orion-beta-c-box.-background-surface_0{
			background-color: #0b111a;
		}
		[data-orion-skin] .accountPanelUser__svg,
		[data-orion-skin].accountPanelUser__svg,
		[data-orion-skin] .accountPanelUser,
		[data-orion-skin].accountPanelUser{
			color: rgb(21 31 46);
			--account-panel-background-color: rgb(21 31 46);
		}
		[data-orion-skin] .a-fontStyle.-body-4{
			font-size: inherit;
		}
		/* Profil box */

		/* Avatar */
		.a-avatarButton__image.a-avatarImage,
		[data-orion-skin] .orion-c-avatar__wrapper,
		[data-orion-skin] .orion-c-avatar__image{
			border: 3px solid #2d587d;
		}
		.a-avatarButton__image.a-avatarImage,
		[data-orion-skin] .orion-c-avatar__wrapper,
		[data-orion-skin] .orion-c-avatar__image,
		.account-profile .overview-content .thumb img,
		.account-profile .overview-content .thumb{
			border-radius: 50% !important;
		}
		[data-orion-skin] .orion-c-avatar__wrapper::after {
			border: 0;
		}
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-metas{
			justify-content: center;
		}
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-metas-avatar,
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-metas-badge {
			border-radius: 50%;
			border: 0;
		}
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-metas-badge {
			width: auto;
		}
		/* Avatar */

		/* Navigation */
		[data-orion-skin] .o-navigationBar,
		[data-orion-skin].o-navigationBar {
			background: rgb(21 31 46);
		}
		.o-navigationBar__siblings {
			display: none;
		}
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-info-credits {
			zoom: 1.2;
		}
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-info-displayname {
			font-size: 1.1em;
			font-weight: 600;
		}
		.c-header-wrapper .c-right-sidebar--account .c-account-sidebar__profile-info-handle {
			font-size: 1em;
		}
		.a-fontStyle.-heading-7,
		.m-navigationSubBlock__title {
			font-size: 1.2em !important;
		}
		.a-button.-interaction {
			--_button-text-color-default: rgb(255 255 255) !important;
		}
		[data-orion-skin] .m-closeableNavigationButton{
			margin-right: 10px;
		}
		/* Navigation */

		/* Pledge Store */
		.RSIStoreTheme .BrowseFilter .BrowseFilter__filters {
			background: #16191d;
			margin-top: 7px;
		}
		@container shipCardStack (width >= 888px) {
			[data-orion-skin] .c-shipCardStack__grid {
				grid-template-columns: repeat(auto-fill, minmax(calc(25% - var(--_shipCardStack-gap)), 1fr));
			}
		}
		@container shipCardInformation (width < 500px) {
			[data-orion-skin] .a-shipCardInformation__container {
				flex-direction: column;
				gap: var(--orion-layout-spacing-0125);
				min-height: 70px;
			}
		}
		[data-orion-skin] .a-shipCardManufacturer__curve {
			margin-right: -1px;
		}
		.a-fontStyle.-button-2 {
			font-size: 1em;
		}
		[data-orion-skin] .m-inputBase__input input,
		[data-orion-skin] .m-inputBase__input textarea,
		[data-orion-skin] .m-inputBase__input select,
		[data-orion-skin] .m-inputBase__input .m-inputBase__content {
			font-size: .9em;
		}
		.RSIStoreTheme div.ShipItem .ShipItem-general-information-name-prefix,
		h3.ShipItem-title br{
			display:none;
		}
		.RSIStoreTheme div.ShipItem .ShipItem-general-information-focus{
			margin-top:0;
		}
		.RSIStoreTheme div.ShipItem .ShipItem-general-information{
			align-items: flex-start;
			align-content:flex-start;
			justify-content: center;
			margin-top:10px;
		}
		.RSIStoreTheme div.ShipItem .ShipItem-general-information-flyable-status{
			margin:0;
		}
		[data-orion-skin] .m-subNavigationBarItem.-variant-regular,
		[data-orion-skin].m-subNavigationBarItem.-variant-regular{
			height: inherit!important;
		}
		@container shipsGrid (width >= 888px) {
			[data-orion-skin] .o-shipsGrid__filterWrapper, [data-orion-skin].o-shipsGrid__filterWrapper {
				top: calc(150px + var(--orion-navigation-bar-height));
			}
		}
		/* Pledge Store */

		/* REFERRAL PAGE */
		/* Zoom 90% */
		#settings.referral-program .referral-rank-wrapper .reward,
		#settings.referral-program .referral-rank-wrapper .rank .badge,
		#settings.referral-program .referral-rank-wrapper .rank .progress {
			zoom: 90%;
		}
		/* Zoom 90% end */


		.wrapper .content-block1 {
			padding: 40px;
		}

		#settings.referral-program .block-head,
		.corner.corner-top-left,
		.corner.corner-top-right,
		.corner.corner-bottom-left,
		.corner.corner-bottom-right,
		#settings.referral-program .recruits-list-wrapper #users-list .user-row:before {
			display: none;
		}

		#settings.referral-program #users-list {
			display: flex;
			flex-wrap: wrap;
			gap: 0 20px;
		}
		#settings.referral-program #users-list > div {
			flex: 1 0 calc(33.333% - 10px);
			box-sizing: border-box;
		}

		#settings.referral-program .referral-rank-wrapper,
		#settings.referral-program .recruits-list-wrapper {
			padding: 0;
			background: none;
		}

		#settings.referral-program .referral-rank-wrapper {
			background-color: rgb(12 27 43) !important;
			;
			padding: 20px 0px 30px !important;
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		#settings.referral-program .referral-rank-wrapper .rank .progress {
			height: auto;
			margin-top: 5%;
			margin-left: 10px;
		}

		#settings.referral-program .referral-rank-wrapper .rank .progress .bar .percent span {
			box-shadow: none;
		}

		#settings.referral-program h4 {
			margin: 0 0 14px;
		}

		#settings.referral-program .rank h4:before {
			content: "Your rank: ";
		}

		#settings.referral-program .referral-rank-wrapper .reward h4 {
			font-size: 1.2em;
			padding: 0 0 9px;
			font-weight: 400;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		#settings.referral-program .referral-rank-wrapper .rank .badge {
			background: rgba(0, 200, 255, .05);
		}

		#settings.referral-program .referral-rank-wrapper .rank .progress .ranking {
			margin-top: -15px;
			bottom: auto;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row .avatar {
			margin-right: 10px;
			border: none;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row {
			padding: 7px 0 7px 0px !important;
		}

		#settings.referral-program .referral-rank-wrapper .reward .desc {
			margin-top: 14px;
			font-size: 1em;
		}

		#settings.referral-program form#share-referral-form input {
			-moz-box-shadow: none;
			-webkit-box-shadow: none;
			box-shadow: none;
			font-weight: 700;
		}

		#settings.referral-program form#share-referral-form label {
			font-size: 1em;
		}

		#settings.referral-program .recruits-list-wrapper form#recruits-list-form a,
		#settings.referral-program .recruits-list-wrapper #users-list .user-row .user {
			font-size: .9em;
			margin-top: 10px;
			font-weight: 600;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row .user span {
			font-weight: 400;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row .status {
			top: 35%;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row:first-child {
			padding-top: 7px;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row {
			padding: 7px 0 7px 15px;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row:first-child::before,
		#settings.referral-program .recruits-list-wrapper #users-list .user-row::before {
			top: 7px;
		}

		#settings.referral-program .recruits-list-wrapper #users-list .user-row:first-child,
		#settings.referral-program .recruits-list-wrapper #users-list .user-row {
			height: 75px;
		}

		#settings.referral-program .recruits-list-wrapper form#recruits-list-form a:first-child {
			margin: 0 10px 12px 0;
		}

		#settings.referral-program .recruits-list-wrapper form#recruits-list-form a:first-child::before {
			height: 24px;
		}

		#settings.referral-program p {
			font-size: .85em;
			line-height: 2em;
			color: #6d7e8f;
		}

		#settings.referral-program .referral-rank-wrapper .reward img {
			height: auto;
		}

		#referral .referral-share p {
			font-size: 1em;
		}

		#referral .description {
			width: auto;
		}

		#referral .description .block {
			width: 300px;
		}

		#referral .description .block .title {
			font: bold 1.2em "Orbitron";
		}

		#referral .description .block p {
			text-align: center;
		}

		#referral p.recruitment {
			font-size: 1em;
		}

		#referral .table .rows .row .infos {
			padding-top: 4px;
			color: #73b1cb;
		}

		#referral .table .rows .row .grade {
			width: 200px;
		}

		#referral .table .rows .row .icon {
			width: 110px;
		}

		#referral .table .table-header.rewards .empty,
		#referral .table .table-header.ranks .empty {
			background: #05111d;
		}

		#referral .table .table-header.ranks .label:before,
		#referral .table .table-header.rewards .label:before {
			border-color: transparent transparent rgb(0 0 0 / 0%) transparent;
		}

		#referral .leaderboard-table {
			width: 840px;
			border: 0px solid #0b6096;
			background: none;
		}

		#referral .leaderboard-table .leaderboard-row.top-row {
			background-color: #054266;
		}

		#referral .leaderboard-table .leaderboard-row {
			height: 100px;
		}

		#referral .leaderboard-table .leaderboard-row:not(:last-child) {
			border-bottom: 1px solid #06314b;
			margin-bottom: 10px;
		}

		#referral .leaderboard-table .leaderboard-row.top-row {
			box-shadow: 0 0 30px 0 rgb(26 140 255 / 0%), 0 0 30px 0 rgb(26 140 255 / 18%);
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-rank {
			padding-top: 0px;
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-cell:not(:last-child) {
			border-right: 0px solid #06314b;
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-name .name-displayname {
			font-weight: 800;
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-name .name-displayname {
			font-size: 1em;
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-name .name-nickname,
		#referral .leaderboard-table .leaderboard-row .leaderboard-referrals .referrals-unit {
			font-size: 1em;
			color: #73b1cb;
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-referrals .referrals-count {
			font-size: 1.5em;
			font-weight: 800;
		}

		#referral .leaderboard-table .leaderboard-row .leaderboard-rank.top-rank {
			background-position: center 50%;
		}

		#settings.ptu .ptucard p h3 {
			margin: 1.5em 0 0 0;
		}

		#settings.ptu .ptucard p,
		#settings .inner-content .top>p,
		#billing .inner-content .top>p,
		#subscribers .inner-content .top>p {
			font-size: .9em;
			color: #ffffff;
		}
		/* REFERRAL PAGE end */

		/* Roadmap Release View */
		.gtqzZI {
			line-height: inherit;
		}

		.enkTcq {
			padding: 5px 80px 0px 0px;
		}

		.cEDkBB svg {
			rotate: 270deg;
		}

		.iBUFAA {
			padding: 1px 10px;
		}

		.dDNykc {
			background-color: rgb(189 146 54 / 75%);
		}

		.gzfXtH {
			background-color: rgb(71 131 64);
			color: rgb(255 255 255);
		}

		.guFEco {
			background: rgb(6 48 77);
		}

		.eoMxzt {
			background-color: rgb(0 41 69);
		}

		.hXHxeU {
			background-image: none;
			background-color: #05111d;
		}

		.gyhYfJ {
			margin: auto;
			border-radius: 10px;
			width: 90%;
		}

		.gyhYfJ,
		.iqyNJj {
			filter: none;
			--media-filter: none;
		}

		.edIkVN {
			background-color: #151f2e;
		}

		.edIkVN,
		.eoMxzt {
			width: 380px;
		}

		.gUDugF,
		.layaUB,
		.gDRwwd,
		.jrGvGl,
		.eoMxzt .layaUB {
			background-color: rgb(32 45 65);
			border: 0;
		}

		.edIkVN .jmUWOw,
		.edIkVN .cBVlkA,
		.edIkVN .fvCukO,
		.edIkVN .feUlHA {
			border: 0;
			background-color: rgb(32 45 65);
		}
		.feUlHA,
		.fvCukO {
			margin-top: -4px;
			width: 347px;
			border-radius:10px;
		}
		.eoMxzt .jmUWOw,
		.eoMxzt .cBVlkA,
		.eoMxzt .fvCukO {
			border: 0;
			background-color: rgb(15 65 99);
		}

		.edIkVN .guFEco {
			background: rgb(24 28 30);
		}
		.eoMxzt .guFEco {
			background: rgb(6 48 77);
		}

		.iuhXsP {
			padding-left: 10px;
		}

		.iLbqJB {
			border-right: 5px solid rgb(75 166 222);
		}

		.gdkTeu {
			background: rgb(24 28 30);
			color: rgb(214 229 235);
		}

		.gQsLHY,
		.cVqGvX {
			color: rgb(186, 193, 197);
		}
		.ifddtC::before,
		.iqyNJj::before {
			background-color: rgb(5 17 29);
		}
		.ifddtC,
		.iqyNJj {
			--color-secondary: rgb(24 34 49);
		}
		.fbdFND {
			background-color: rgb(32 45 65);
		}
		.eRqdlz {
			background-color: rgb(189 146 54 / 75%);
			color:#fff;
		}
		.iSJsDE {
			background-color: rgb(71 131 64);
			color:#fff;
		}
		.dlSnfY,
		.bVMmCL {
			border: 0;
		}
		/* Roadmap Release View end */

		/*
		@name           DevTracker - Better Spectrum Dark Theme
		@author         rjcncpt
		*/

		.groups-wrapper,
		.services-wrapper {
			text-align: left;
			width: auto;
		}

		.glow-hub-title h1,
		.glow-hub-title h1 a,
		.glow-hub-title h2,
		.glow-hub-title .glow-hub-section,
		.glow-hub-title .glow-hub-section a {
			text-shadow: none;
		}

		#community .devtracker-list {
			display: flex;
		}

		#community .devtracker-list h3 {
			padding: 40px 0px 12px;
		}

		.glow-hub-title {
			padding: 0 0px;
			height: 120px;
		}

		body.theme-dark {
			background-color: #05111d;
		}

		body.theme-dark .panel,
		body.theme-dark .panel>.panel-footer {
			background-color: #101824;
		}

		body.theme-dark .panel>.panel-heading,
		body.theme-dark blockquote {
			background-color: #1a273a;
		}

		body.theme-dark blockquote {
			opacity: 1;
			margin: 10px 0 20px 10px;
			padding: 15px 15px;
		}

		body.theme-dark blockquote div {
			margin: 0 0 10px;
		}

		body.theme-dark .panel-body {
			padding: 15px;
		}

		body.theme-dark .panel-body img {
			max-width: 100%;
			margin: 20px 0 10px;
		}

		body.theme-dark .panel-footer {
			padding: 10px 15px;
		}

		.devtracker-list .devpost {
			margin-bottom: 30px;
		}

		.devtracker-list .devpost .devpost-wrapper .topic,
		.devtracker-list .devpost .devpost-wrapper .details {
			font: .8em/20px "Arial";
			color: #ddd;
		}

		.devtracker-list .devpost .devpost-wrapper .topic .thread {
			color: #95c1e1;
		}

		.devtracker-list .devpost .devpost-wrapper .topic .category {
			color: #95c1e1;
			font-weight: bold;
		}

		.devtracker-list .devpost .devpost-wrapper .info .poster {
			padding-top: 5px;
		}

		.devtracker-list .devpost .devpost-wrapper .topic .category::after {
			content: '|';
			padding-left: 9px;
			padding-right: 5px;
		}

		.devtracker-list .devpost .devpost-wrapper .info .poster .nickname {
			color: rgb(239 191 96);
			font-size: 1em;
			font-weight: bold;
		}

		.devtracker-list .devpost .devpost-wrapper .info .date {
			float: none;
			padding-left: 84px;
			margin-top: -25px;
		}

		.devtracker-list .devpost .devpost-wrapper .info .date>* {
			display: inline;
		}

		.devtracker-list .devpost .devpost-wrapper .info .date::before,
		.devtracker-list .devpost .devpost-wrapper .info .date::after {
			display: none;
		}

		.devtracker-list .devpost .devpost-wrapper .info .date .label {
			text-transform: none;
			color: #0891c5;
		}

		.devtracker-list .devpost .devpost-wrapper .info .date .label::after {
			content: '|';
		}

		.devtracker-list .devpost .devpost-wrapper .info img {
			width: 65px;
			height: 65px;
			border-radius: 50%;
		}

		.devtracker-list .devpost,
		.devtracker-list .devpost .devpost-wrapper {
			height: auto;
		}

		/* Better Gallery */
		.content-block.image,
		.content-block.video{
			display: inline-flex;
		}

		/* Responsive yt video */
		.media-embed-wrapper .media-embed-code {
			position: relative;
			width: 100%;
			overflow: hidden;
			padding-top: 56.25%;
		}
		.media-embed-wrapper .media-embed-code iframe{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
		}
		.content-block.image.gallery .content-block-media{
			height: 128px;
		}
		.gifv video {
			width: auto;
		}
		.content-block{
			width: auto;
		}`;
    document.head.appendChild(style);
})();