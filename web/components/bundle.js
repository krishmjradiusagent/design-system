/* @ds-bundle: {"format":4,"namespace":"RadiusUI","components":[{"name":"Button"},{"name":"ButtonGroup"},{"name":"Badge"},{"name":"Input"},{"name":"InputGroup"},{"name":"Textarea"},{"name":"Label"},{"name":"Field"},{"name":"Checkbox"},{"name":"RadioGroup"},{"name":"Switch"},{"name":"Slider"},{"name":"Select"},{"name":"NativeSelect"},{"name":"Combobox"},{"name":"InputOTP"},{"name":"Toggle"},{"name":"ToggleGroup"},{"name":"Calendar"},{"name":"DatePicker"},{"name":"Card"},{"name":"Avatar"},{"name":"Table"},{"name":"DataTable"},{"name":"Item"},{"name":"Kbd"},{"name":"Separator"},{"name":"Skeleton"},{"name":"Spinner"},{"name":"Progress"},{"name":"Empty"},{"name":"Alert"},{"name":"Sonner"},{"name":"Tooltip"},{"name":"HoverCard"},{"name":"Typography"},{"name":"AspectRatio"},{"name":"ScrollArea"},{"name":"Resizable"},{"name":"Carousel"},{"name":"Chart"},{"name":"Accordion"},{"name":"Collapsible"},{"name":"Tabs"},{"name":"Dialog"},{"name":"AlertDialog"},{"name":"Sheet"},{"name":"Drawer"},{"name":"Popover"},{"name":"DropdownMenu"},{"name":"ContextMenu"},{"name":"Menubar"},{"name":"Command"},{"name":"NavigationMenu"},{"name":"Breadcrumb"},{"name":"Pagination"},{"name":"Sidebar"},{"name":"Conversation"},{"name":"Message"},{"name":"PromptInput"},{"name":"AskBox"},{"name":"Suggestion"},{"name":"Actions"},{"name":"Branch"},{"name":"Loader"},{"name":"Shimmer"},{"name":"Reasoning"},{"name":"ChainOfThought"},{"name":"Tool"},{"name":"Task"},{"name":"Plan"},{"name":"Queue"},{"name":"Confirmation"},{"name":"Sources"},{"name":"InlineCitation"},{"name":"CodeBlock"},{"name":"Artifact"},{"name":"Context"},{"name":"Checkpoint"},{"name":"GeneratedImage"},{"name":"AppShell"},{"name":"MelMark"},{"name":"MelLockup"},{"name":"MelMascot"},{"name":"IconTile"},{"name":"AssistantPill"},{"name":"SkillPills"},{"name":"VoiceBars"},{"name":"DotPattern"},{"name":"MelInline"},{"name":"MelCard"},{"name":"ChatTable"},{"name":"TableView"},{"name":"RightPanel"},{"name":"MediaViewer"},{"name":"PageCardLink"},{"name":"ReportBlocks"},{"name":"DataNotices"},{"name":"MotionSystem"},{"name":"contact_card"},{"name":"change_card"},{"name":"message_draft_card"},{"name":"stats_card"},{"name":"asset_package_card"},{"name":"social_post_review_card"},{"name":"thinking"},{"name":"reasoning_trace"},{"name":"job_status"},{"name":"suggested_prompts"},{"name":"reminder_card"},{"name":"people_list_card"},{"name":"campaign_plan_card"},{"name":"campaign_sequence_card"},{"name":"campaign_status_card"},{"name":"delivery_result_card"},{"name":"option_picker_card"},{"name":"style_picker_card"},{"name":"email_review_card"},{"name":"brand_kit_card"},{"name":"CardProtocol"},{"name":"mel_text"},{"name":"skill_cards"},{"name":"capability_carousel"},{"name":"empty_card"},{"name":"info_alert_card"},{"name":"property_card"},{"name":"search_board_card"},{"name":"audience_card"},{"name":"sequence_step_card"},{"name":"approval_summary_card"},{"name":"connect_card"},{"name":"portal_card"},{"name":"portal_status_card"},{"name":"feature_list"},{"name":"invitation_preview_card"},{"name":"send_summary_card"},{"name":"insights_card"},{"name":"escalation_card"},{"name":"listing_picker_card"},{"name":"website_review_card"},{"name":"status_list_card"},{"name":"ytd_progress_card"},{"name":"contact_picker_card"},{"name":"result_list_card"},{"name":"client_card"},{"name":"client_note_card"},{"name":"offer_card"},{"name":"document_card"},{"name":"image_card"},{"name":"web_sources"},{"name":"credits_banner"}]} */
/* Radius UI Design System — vanilla behaviour layer. No React, no network.
   Markup is plain HTML with rds- classes; this file adds icons, Mel marks and interaction.
   Auto-runs RadiusUI.init(document) on load; call RadiusUI.init(el) after inserting markup. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';

  /* Lucide icons (ISC licence), the shadcn default set. 24 grid, stroke 1.8 in Mel web. */
  var ICONS = {
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-up': '<path d="m18 15-6-6-6 6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevrons-up-down': '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
    'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    'mic': '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    'paperclip': '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    'thumbs-up': '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
    'thumbs-down': '<path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/>',
    'share': '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
    'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    'more-vertical': '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
    'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'home': '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    'calendar': '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    'prompt-glyph': '<path d="M6 3.75v9a3 3 0 0 0 3 3h9.75"/><path d="m15 11.25 4.5 4.5-4.5 4.5"/>',
    'maximize-2': '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/>',
    'table': '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'trophy': '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    'megaphone': '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    'file-spreadsheet': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>',
    'play': '<polygon points="6 3 20 12 6 21 6 3"/>',
    'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    'palette': '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
    'phone-call': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'list-ordered': '<path d="M10 12h11"/><path d="M10 18h11"/><path d="M10 6h11"/><path d="M4 10h2"/><path d="M4 6h1v4"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
    'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'sparkles': '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    'brain': '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>',
    'list-checks': '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    'link': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    'upload': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    'trash': '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    'pencil': '<path d="M21.17 6.81a1 1 0 0 0-3.98-3.98L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/><path d="m15 5 4 4"/>',
    'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
    'circle': '<circle cx="12" cy="12" r="10"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    'panel-left': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
    'square-pen': '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
    'filter': '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    'grip-vertical': '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'building': '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    'dollar-sign': '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    'bar-chart': '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
    'code': '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    'history': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    'bookmark': '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
    'eye': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    'square': '<rect width="14" height="14" x="5" y="5" rx="2"/>',
    'loader': '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
    'inbox': '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    'git-branch': '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    'bold': '<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>',
    'italic': '<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>',
    'underline': '<path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/>',
    'align-left': '<line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/>',
    'align-center': '<line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/>',
    'align-right': '<line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/>',
    'arrow-up-down': '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>'
  };

  function icon(name, cls) {
    var body = ICONS[name] || ICONS['circle'];
    return '<svg class="rds-ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + body + '</svg>';
  }

  /* Mel mark (Brand · 01 Logo): rounded shape + living dot. Never redraw. */
  var MEL_PATH = 'M48 8 H72 A40 40 0 0 1 112 48 V72 A40 40 0 0 1 72 112 H19 A11 11 0 0 1 8 101 V48 A40 40 0 0 1 48 8 Z';
  function melMarkSVG(state) {
    var inner;
    if (state === 'listening') {
      inner = [0, .6, 1.2].map(function (d) { return '<circle cx="60" cy="60" r="38" fill="none" stroke="#fff" stroke-width="2.5" stroke-opacity="0"><animate attributeName="r" values="40;15" dur="1.8s" begin="' + d + 's" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values="0;0.85" dur="1.8s" begin="' + d + 's" repeatCount="indefinite"/></circle>'; }).join('') + '<circle class="dot" cx="60" cy="60" r="15"/>';
    } else if (state === 'thinking' || state === 'working') {
      inner = [42, 60, 78].map(function (x, i) { var b = (i * .15).toFixed(2); return '<circle class="dot" cx="' + x + '" cy="60" r="7"><animate attributeName="cy" values="60;52;60;60" keyTimes="0;0.25;0.5;1" dur="1.2s" begin="' + b + 's" repeatCount="indefinite"/><animate attributeName="fill-opacity" values="0.45;1;0.45;0.45" keyTimes="0;0.25;0.5;1" dur="1.2s" begin="' + b + 's" repeatCount="indefinite"/></circle>'; }).join('');
    } else if (state === 'speaking') {
      var bars = [[35.5, 55, 10, '10;26;10', '55;47;55'], [46, 49, 22, '22;8;22', '49;56;49'], [56.5, 45, 30, '30;14;30', '45;53;45'], [67, 53, 14, '14;30;14', '53;45;53'], [77.5, 55, 10, '10;20;10', '55;50;55']];
      inner = bars.map(function (b, i) { return '<rect class="dot" x="' + b[0] + '" y="' + b[1] + '" width="7" height="' + b[2] + '" rx="3.5"><animate attributeName="height" values="' + b[3] + '" dur="0.9s" begin="' + (i * .11).toFixed(2) + 's" repeatCount="indefinite"/><animate attributeName="y" values="' + b[4] + '" dur="0.9s" begin="' + (i * .11).toFixed(2) + 's" repeatCount="indefinite"/></rect>'; }).join('');
    } else if (state === 'done') {
      inner = '<circle class="dot" cx="60" cy="60" r="20"/><path d="M51 60.5 L57.5 67 L70 54" fill="none" stroke="var(--mel-green)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>';
    } else if (state === 'attention') {
      inner = '<circle class="dot" cx="60" cy="60" r="13"/><circle cx="98" cy="22" r="11" fill="var(--mel-mint)" stroke="#fff" stroke-width="4"/>';
    } else {
      inner = '<circle class="ring" cx="60" cy="60" r="13"/><circle class="dot" cx="60" cy="60" r="13"/>';
    }
    return '<svg viewBox="-10 -10 140 140" aria-hidden="true"><path class="shape" d="' + MEL_PATH + '"/>' + inner + '</svg>';
  }

  /* Icon tile glyphs (Brand · 06 Iconography) — 120 grid, scaled .74 inside the Mel shape. */
  var GLYPHS = {
    'campaigns': '<path class="glyph" d="M36 60 L84 38 L72 84 L60 66 Z"/><path class="glyph" d="M60 66 L84 38"/>',
    'design': '<path class="glyph" d="M40 82 L68 54" style="stroke-width:5.5"/><path class="glyph-fill" d="M78 34 C79.2 41 81 42.8 88 44 C81 45.2 79.2 47 78 54 C76.8 47 75 45.2 68 44 C75 42.8 76.8 41 78 34 Z"/><circle class="glyph-fill" cx="50" cy="44" r="4"/>',
    'crm': '<circle class="glyph" cx="60" cy="49" r="11"/><path class="glyph" d="M40 84 C40 71 49 65 60 65 C71 65 80 71 80 84"/>',
    'client-experience': '<rect class="glyph" x="44" y="33" width="32" height="54" rx="9"/><path class="glyph" style="stroke-width:4" d="M52 58 L60 51 L68 58 V68 H52 Z"/>',
    'documentation': '<path class="glyph" d="M45 35 H64 L76 47 V85 H45 Z"/><path class="glyph" d="M64 35 V47 H76"/><path class="glyph" style="stroke-width:4.5" d="M53 62 H68 M53 73 H63"/>',
    'compliance': '<path class="glyph" d="M60 33 L81 41 V57 C81 72 72 81 60 87 C48 81 39 72 39 57 V41 Z"/><path class="glyph" d="M50 60 L57 67 L70 53"/>',
    'commissions': '<path class="glyph" d="M71 48 C68 41 53 41 51 49 C49 57 71 56 71 67 C71 78 53 79 49 71"/><path class="glyph" d="M60 34 V86"/>',
    'calendar': '<rect class="glyph" x="37" y="40" width="46" height="44" rx="9"/><path class="glyph" d="M37 54 H83"/><path class="glyph" d="M49 33 V44 M71 33 V44"/><path class="glyph" style="stroke-width:4.5" d="M51 69 L57 75 L69 63"/>',
    'voice': '<rect class="glyph-fill" x="36" y="52" width="7" height="16" rx="3.5"/><rect class="glyph-fill" x="46.5" y="45" width="7" height="30" rx="3.5"/><rect class="glyph-fill" x="57" y="38" width="7" height="44" rx="3.5"/><rect class="glyph-fill" x="67.5" y="45" width="7" height="30" rx="3.5"/><rect class="glyph-fill" x="78" y="52" width="7" height="16" rx="3.5"/>',
    'working': '<circle class="glyph-fill" cx="42" cy="60" r="7"/><circle class="glyph-fill" cx="60" cy="60" r="7"/><circle class="glyph-fill" cx="78" cy="60" r="7"/>',
    'ask': '<circle class="glyph-fill" cx="60" cy="60" r="9"/><circle class="glyph" cx="60" cy="60" r="19" style="stroke-opacity:.45"/>'
  };
  function iconTileSVG(glyph) {
    return '<svg viewBox="0 0 120 120" aria-hidden="true"><path class="shape" d="' + MEL_PATH + '"/><g transform="translate(60 60) scale(0.74) translate(-60 -60)">' + (GLYPHS[glyph] || GLYPHS.ask) + '</g></svg>';
  }
  var MASCOT = '<span class="rds-mascot__body"><svg class="rds-mascot__eyes" viewBox="0 0 17 8" aria-hidden="true"><path class="rds-mascot__eye" d="M0 8V3a3 3 0 0 1 6 0v5Z"/><path class="rds-mascot__eye" d="M11 8V3a3 3 0 0 1 6 0v5Z"/></svg><svg class="rds-mascot__smile" viewBox="0 0 17 6.5" aria-hidden="true"><path d="M0 6V3a3 3 0 0 1 6 0v3H4.6V3a1.6 1.6 0 0 0-3.2 0v3Z"/><path d="M11 6V3a3 3 0 0 1 6 0v3h-1.4V3a1.6 1.6 0 0 0-3.2 0v3Z"/></svg></span>';

  function $all(root, sel) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function closest(el, sel) { return el && el.closest ? el.closest(sel) : null; }

  /* ---------- Calendar ---------- */
  var DOW = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function renderCalendar(el) {
    var y = +el.getAttribute('data-year'), m = +el.getAttribute('data-month');
    var sel = el.getAttribute('data-selected') || '', range = (el.getAttribute('data-range') || '').split(',');
    var today = el.getAttribute('data-today') || '';
    var first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), prevDays = new Date(y, m, 0).getDate();
    var h = '<div class="rds-calendar__head"><button class="rds-iconbtn" data-cal="-1" aria-label="Previous month">' + icon('chevron-left') + '</button><div class="rds-calendar__title">' + MONTHS[m] + ' ' + y + '</div><button class="rds-iconbtn" data-cal="1" aria-label="Next month">' + icon('chevron-right') + '</button></div><div class="rds-calendar__grid" role="grid">';
    DOW.forEach(function (d) { h += '<div class="rds-calendar__dow">' + d + '</div>'; });
    for (var i = 0; i < 42; i++) {
      var d = i - first + 1, out = d < 1 || d > days, label = d < 1 ? prevDays + d : d > days ? d - days : d;
      var key = y + '-' + (m + 1) + '-' + d, attrs = out ? ' data-outside' : '';
      if (!out && key === sel) attrs += ' aria-selected="true"';
      if (!out && range.length === 2 && d > +range[0] && d < +range[1]) attrs += ' data-range';
      if (!out && range.length === 2 && (d === +range[0] || d === +range[1])) attrs += ' aria-selected="true"';
      if (!out && key === today) attrs += ' data-today';
      h += '<button class="rds-calendar__day" data-day="' + (out ? '' : d) + '"' + attrs + '>' + label + '</button>';
      if (i >= 34 && d >= days) break;
    }
    el.innerHTML = h + '</div>';
  }

  /* ---------- Toast ---------- */
  function toast(opts) {
    opts = opts || {};
    var host = document.querySelector('.rds-toaster');
    if (!host) { host = document.createElement('div'); host.className = 'rds-toaster rds'; document.body.appendChild(host); }
    var v = opts.variant || 'default', ic = { success: 'check-circle', danger: 'alert-circle', warning: 'alert-triangle', default: 'info', dark: 'sparkles' }[v] || 'info';
    var t = document.createElement('div');
    t.className = 'rds-toast rds-toast--' + v; t.setAttribute('role', 'status');
    t.innerHTML = icon(ic) + '<div class="rds-toast__body"><div class="rds-toast__title"></div>' + (opts.description ? '<div class="rds-toast__desc"></div>' : '') + '</div>' + (opts.action ? '<button class="rds-btn rds-btn--outline rds-btn--sm"></button>' : '') + '<button class="rds-iconbtn" aria-label="Dismiss" data-rds-dismiss>' + icon('x') + '</button>';
    t.querySelector('.rds-toast__title').textContent = opts.title || '';
    if (opts.description) t.querySelector('.rds-toast__desc').textContent = opts.description;
    if (opts.action) t.querySelector('.rds-btn').textContent = opts.action;
    host.appendChild(t);
    if (opts.duration !== 0) setTimeout(function () { t.remove(); }, opts.duration || 4000);
    return t;
  }


  /* ---------- Live thinking trace (Mel web timings) ----------
     <div data-rds-trace-live data-ask="…" data-steps="Step one|Step two" data-summary="Checked 2 things"
          data-reply="…" data-rows="Row one|Row two"></div>
     send → 800ms → Thinking… shimmer → one step every 700ms (spinner → check) → collapse to summary
     → reply streams one word / 60ms → prompt rows rise in (80ms stagger) → hold → loop. */
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function esc(x) { return String(x).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var CHECK16 = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="6.5"/><path d="M5.2 8.2l1.9 1.9 3.8-4"/></svg>';
  function runTraceLive(el, restart) {
    if (el._rdsTimers) el._rdsTimers.forEach(clearTimeout);
    el._rdsTimers = [];
    var T = function (fn, ms) { el._rdsTimers.push(setTimeout(fn, ms)); };
    var steps = (el.getAttribute('data-steps') || '').split('|').filter(Boolean);
    var rows = (el.getAttribute('data-rows') || '').split('|').filter(Boolean);
    var words = (el.getAttribute('data-reply') || '').split(' ');
    var ask = el.getAttribute('data-ask') || '', sum = el.getAttribute('data-summary') || ('Checked ' + steps.length + ' things');
    var loop = el.hasAttribute('data-loop');
    var user = '<div class="rds-msg rds-msg--user"><div class="rds-msg__content">' + esc(ask) + '</div></div>';
    var mark = '<span class="rds-mel-mark" data-state="__S__" style="width:28px;height:28px;flex:none"></span>';
    function frame(markState, inner) { el.innerHTML = '<div style="display:flex;flex-direction:column;gap:16px">' + user + '<div style="display:flex;gap:12px;align-items:flex-start">' + mark.replace('__S__', markState) + '<div class="rds-live__col" style="flex:1;min-width:0;display:flex;flex-direction:column;gap:10px">' + inner + '</div></div></div>'; init(el); }
    function traceHTML(n, running, open) {
      var lines = steps.map(function (s, i) {
        var stt = i < n ? 'done' : (i === n && running ? 'running' : 'queued');
        return '<div class="rds-trace__line" data-status="' + stt + '"><span class="rds-trace__icon">' + (stt === 'running' ? '<span class="rds-spin"></span>' : CHECK16) + '</span><span class="rds-trace__text">' + esc(s) + '</span></div>';
      }).join('');
      var title = running ? esc(steps[Math.min(n, steps.length - 1)]) : esc(sum);
      return '<div class="rds-trace"' + (running ? ' data-running' : '') + '><button type="button" class="rds-trace__sum" aria-expanded="' + (open ? 'true' : 'false') + '"><span class="rds-trace__icon">' + (running ? '<span class="rds-spin"></span>' : CHECK16) + '</span><span class="rds-trace__title">' + title + '</span>' + icon('chevron-down', 'rds-trace__chev') + '</button><div class="rds-trace__steps">' + lines + '</div></div>';
    }
    function final() { return traceHTML(steps.length, false, false) + '<p class="ui-body" style="margin:0;font-size:16px;line-height:24px">' + esc(words.join(' ')) + '</p>' + (rows.length ? '<div class="rds-prompt-rows rds-anim-stagger">' + rows.map(function (r) { return '<button type="button" class="rds-prompt-row">' + icon('prompt-glyph', 'rds-prompt-row__glyph') + '<span class="rds-prompt-row__text">' + esc(r) + '</span></button>'; }).join('') + '</div>' : ''); }
    if (REDUCED) { frame('ready', final()); return; }
    el.innerHTML = '<div style="display:flex;flex-direction:column;gap:16px">' + user + '</div>';
    var t0 = 800;
    T(function () { frame('thinking', '<p class="rds-thinking" role="status"><span class="rds-spin"></span><span class="rds-thinking__text">Thinking…</span></p>'); }, t0);
    var tSteps = t0 + 700;
    steps.forEach(function (_, i) { T(function () { frame('thinking', traceHTML(i, true, true)); }, tSteps + i * 700); });
    var tDone = tSteps + steps.length * 700;
    T(function () { frame('speaking', traceHTML(steps.length, false, false) + '<p class="ui-body rds-live__reply" style="margin:0;font-size:16px;line-height:24px"></p>'); }, tDone);
    words.forEach(function (_, i) { T(function () { var p = el.querySelector('.rds-live__reply'); if (p) p.textContent = words.slice(0, i + 1).join(' '); }, tDone + 240 + i * 60); });
    var tEnd = tDone + 240 + words.length * 60;
    T(function () { frame('done', final()); }, tEnd + 60);
    T(function () { var m = el.querySelector('.rds-mel-mark'); if (m) { m.setAttribute('data-state', 'ready'); m.innerHTML = melMarkSVG('ready'); } }, tEnd + 2060);
    if (loop) T(function () { runTraceLive(el); }, tEnd + 5200);
  }

  /* Suggested prompts and option pickers FILL the composer; they never send (Mel Chat Templates). */
  function fillComposer(from, text) {
    var scope = closest(from, '[data-rds-chat]') || document;
    var f = scope.querySelector('.rds-prompt__field'); if (!f) return;
    f.value = text; autosize(f); f.focus();
    var p = closest(f, '.rds-prompt'); if (p) { p.classList.remove('rds-fill-flash'); void p.offsetWidth; p.classList.add('rds-fill-flash'); var sb = p.querySelector('.rds-prompt__submit[data-auto]'); if (sb) sb.disabled = false; }
  }
  /* job_status demo: <p class="rds-job" data-rds-job-demo data-verb="Designing" data-done="Designed" data-total="6" data-unit="ready"> */
  function runJobDemo(el) {
    var n = 0, total = +(el.getAttribute('data-total') || 6), verb = el.getAttribute('data-verb') || 'Working', dn = el.getAttribute('data-done') || 'Done', unit = el.getAttribute('data-unit') || 'ready';
    function draw() { var done = n >= total; el.setAttribute('data-state', done ? 'done' : 'working'); el.innerHTML = '<span class="rds-job__dot"></span><span><b>' + (done ? dn : verb) + '</b> · ' + Math.min(n, total) + ' of ' + total + (done ? '' : ' ' + unit) + '</span>'; }
    draw(); el._rdsJob = setInterval(function () { n = n >= total + 2 ? 0 : n + 1; draw(); }, 900);
  }
  /* ---------- init: hydrate icons, marks, controls ---------- */
  function init(root) {
    root = root || document;
    $all(root, '[data-icon]').forEach(function (el) {
      if (el.tagName.toLowerCase() === 'svg') return;
      var tmp = document.createElement('span'); tmp.innerHTML = icon(el.getAttribute('data-icon'), el.className || '');
      el.replaceWith(tmp.firstChild);
    });
    $all(root, '.rds-mel-mark').forEach(function (el) { if (!el.querySelector('svg')) el.innerHTML = melMarkSVG(el.getAttribute('data-state')); if (!el.hasAttribute('role')) { el.setAttribute('role', 'img'); el.setAttribute('aria-label', el.getAttribute('aria-label') || 'Mel'); } });
    $all(root, '.rds-icon-tile').forEach(function (el) { if (!el.querySelector('svg')) el.innerHTML = iconTileSVG(el.getAttribute('data-glyph')); });
    $all(root, '.rds-mascot').forEach(function (el) { if (!el.querySelector('.rds-mascot__body')) el.innerHTML = MASCOT; el.setAttribute('aria-hidden', 'true'); });
    $all(root, '[data-rds-calendar]').forEach(renderCalendar);
    $all(root, '.rds-slider').forEach(syncSlider);
    $all(root, 'input[data-indeterminate]').forEach(function (c) { c.indeterminate = true; });
    $all(root, '.rds-prompt__field').forEach(autosize);
    $all(root, '.rds-carousel').forEach(function (c) { goSlide(c, +(c.getAttribute('data-index') || 0)); });
    $all(root, '[data-rds-job-demo]').forEach(function (j) { if (!j._rdsJob && !REDUCED) runJobDemo(j); });
    $all(root, '[data-rds-trace-live]').forEach(function (l) { if (!l._rdsStarted) { l._rdsStarted = true; runTraceLive(l); } });
    return root;
  }
  function syncSlider(s) { var p = (s.value - (s.min || 0)) / ((s.max || 100) - (s.min || 0)) * 100; s.style.setProperty('--pct', p + '%'); }
  function autosize(t) { if (t.tagName !== 'TEXTAREA') return; t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight, 200) + 'px'; }
  function goSlide(c, i) {
    var slides = $all(c, '.rds-carousel__slide'); if (!slides.length) return;
    i = Math.max(0, Math.min(i, slides.length - 1)); c.setAttribute('data-index', i);
    var track = c.querySelector('.rds-carousel__track'); if (track) track.style.transform = 'translateX(calc(' + (-i * 100) + '% - ' + (i * 12) + 'px))';
    $all(c, '.rds-carousel__dot').forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
  }
  function closeFloating(except) {
    $all(document, '[data-rds-floating][data-open]').forEach(function (el) { if (el !== except && !el.contains(except)) el.removeAttribute('data-open'); });
  }
  function setOpen(el, open) { if (open) el.setAttribute('data-open', ''); else el.removeAttribute('data-open'); var t = el.querySelector('[data-rds-trigger]'); if (t) t.setAttribute('aria-expanded', open ? 'true' : 'false'); }

  /* ---------- delegated events ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;

    /* ---- Mel chat cards ---- */
    var tsum = closest(t, '.rds-trace__sum');
    if (tsum) { tsum.setAttribute('aria-expanded', tsum.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'); }
    var qo = closest(t, '.rds-qcard__opt');
    if (qo) {
      var qc = closest(qo, '.rds-qcard');
      if (qc && !qc.hasAttribute('data-locked')) {
        if (qo.hasAttribute('data-rds-own')) { qo.hidden = true; var fld = qc.querySelector('.rds-qcard__field'); if (fld) { fld.hidden = false; var inp = fld.querySelector('input'); if (inp) inp.focus(); } }
        else if (qc.hasAttribute('data-multi')) { var onm = qo.getAttribute('aria-pressed') !== 'true'; qo.setAttribute('aria-pressed', onm ? 'true' : 'false'); var km = qo.querySelector('.rds-qcard__key'); if (km) { if (!km.hasAttribute('data-key')) km.setAttribute('data-key', km.textContent); km.innerHTML = onm ? icon('check') : km.getAttribute('data-key'); } var sendB = qc.querySelector('.rds-qcard__foot .rds-btn'); if (sendB) sendB.setAttribute('aria-disabled', qc.querySelector('.rds-qcard__opt[aria-pressed="true"]') ? 'false' : 'true'); }
        else { $all(qc, '.rds-qcard__opt').forEach(function (o) { var on = o === qo; o.setAttribute('aria-pressed', on ? 'true' : 'false'); var k = o.querySelector('.rds-qcard__key'); if (k && !o.hasAttribute('data-rds-own')) { if (!k.hasAttribute('data-key')) k.setAttribute('data-key', k.textContent); k.innerHTML = on ? icon('check') : k.getAttribute('data-key'); } }); }
      }
    }
    var ss = closest(t, '.rds-style__sel');
    if (ss) ss.setAttribute('aria-pressed', ss.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    var sg = closest(t, '.rds-seg button');
    if (sg) $all(closest(sg, '.rds-seg'), 'button').forEach(function (b) { b.setAttribute('aria-pressed', b === sg ? 'true' : 'false'); });
    var pr = closest(t, '[data-rds-press]');
    if (pr) pr.setAttribute('aria-pressed', pr.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    var snd = closest(t, '[data-rds-send]');
    if (snd) { var card = closest(snd, '.rds-mc, .rds-mdraft'); if (card && !card.getAttribute('data-state')) { card.setAttribute('data-state', 'sending'); var orig = snd.innerHTML; snd.innerHTML = '<span class="rds-spin" style="border-color:rgba(255,255,255,.35);border-top-color:#fff"></span>'; setTimeout(function () { card.setAttribute('data-state', 'done'); snd.innerHTML = orig; }, 600); } }
    var rf = closest(t, '[data-rds-refresh]');
    if (rf && !rf.hasAttribute('data-spin')) {
      var pnl = closest(rf, '.rds-panel'), st = pnl && pnl.querySelector('.rds-panel__status'), stx = st && st.querySelector('span'), old = stx && stx.textContent;
      rf.setAttribute('data-spin', ''); if (st) st.setAttribute('data-state', 'refreshing'); if (stx) stx.textContent = 'Refreshing from Radius…';
      setTimeout(function () { rf.removeAttribute('data-spin'); if (st) st.removeAttribute('data-state'); if (stx) stx.textContent = old.replace(/As of [^·]*/, 'Updated just now '); }, 1200);
    }
    if (closest(t, '[data-rds-replay]')) { var lv = closest(t, '[data-rds-trace-live]') || document.querySelector('[data-rds-trace-live]'); if (lv) runTraceLive(lv, true); }

    var qsend = closest(t, '.rds-qcard__foot .rds-btn');
    if (qsend && qsend.getAttribute('aria-disabled') !== 'true') {
      var qcs = closest(qsend, '.rds-qcard'), says = $all(qcs, '.rds-qcard__opt[aria-pressed="true"]').map(function (o) { return o.getAttribute('data-say') || o.querySelector('b').textContent.toLowerCase(); });
      var list = says.length > 1 ? says.slice(0, -1).join(', ') + ' and ' + says[says.length - 1] : (says[0] || '');
      fillComposer(qcs, (qcs.getAttribute('data-sentence') || '{items}').replace('{items}', list));
    }
    var pfill = closest(t, '.rds-prompt-row, .rds-follow-chip');
    if (pfill && closest(pfill, '[data-rds-chat]')) fillComposer(pfill, pfill.textContent.trim());
    var mto = closest(t, '.rds-mto__btn');
    if (mto) { var box = closest(mto, '.rds-mto'), op = !box.hasAttribute('data-open'); if (op) box.setAttribute('data-open', ''); else box.removeAttribute('data-open'); mto.textContent = op ? 'Show less' : 'Show more'; mto.setAttribute('aria-expanded', op ? 'true' : 'false'); }
    var rty = closest(t, '[data-kind="retry"]');
    if (rty) { var rc = closest(rty, '[data-state]'); if (rc) { rc.setAttribute('data-state', 'working'); setTimeout(function () { rc.setAttribute('data-state', 'done'); }, 900); } }

    var cpo = closest(t, '.rds-cpick input[type=checkbox]');
    if (cpo) {
      var cp = closest(cpo, '.rds-cpick'), boxes = $all(cp, '.rds-cpick__opt:not(.rds-cpick__opt--all) input');
      if (closest(cpo, '.rds-cpick__opt--all')) boxes.forEach(function (b) { b.checked = cpo.checked; });
      var n = boxes.filter(function (b) { return b.checked; }).length, total = +(cp.getAttribute('data-total') || boxes.length);
      if (closest(cpo, '.rds-cpick__opt--all') && cpo.checked) n = total;
      var cnt = cp.querySelector('[data-count]'); if (cnt) cnt.textContent = n.toLocaleString() + ' selected';
      var go = cp.querySelector('.rds-cpick__f .rds-btn'); if (go) { go.textContent = 'Invite ' + n.toLocaleString() + ' client' + (n === 1 ? '' : 's'); go.setAttribute('aria-disabled', n ? 'false' : 'true'); }
    }
    var skc = closest(t, '.rds-skillcard[data-prompt], .rds-qcard__opt[data-prompt]');
    if (skc && closest(skc, '[data-rds-chat]')) fillComposer(skc, skc.getAttribute('data-prompt'));
    // generic disclosure: [data-rds-trigger] toggles data-open on its [data-rds-root]
    var trig = closest(t, '[data-rds-trigger]');
    if (trig) {
      var root = closest(trig, '[data-rds-root]');
      if (root) {
        var willOpen = !root.hasAttribute('data-open');
        var acc = closest(root, '[data-rds-accordion="single"]');
        if (acc && willOpen) $all(acc, '[data-rds-root][data-open]').forEach(function (o) { setOpen(o, false); });
        if (root.hasAttribute('data-rds-floating')) closeFloating(root);
        setOpen(root, willOpen);
        e.preventDefault(); return;
      }
    }
    // select / menu item choice
    var item = closest(t, '.rds-menu__item');
    if (item) {
      var sel = closest(item, '.rds-select');
      if (sel) {
        $all(sel, '.rds-menu__item').forEach(function (i) { i.setAttribute('aria-selected', i === item ? 'true' : 'false'); });
        var v = sel.querySelector('.rds-select__value'); if (v) v.textContent = item.getAttribute('data-label') || item.textContent.trim();
        var tr = sel.querySelector('.rds-select__trigger'); if (tr) tr.removeAttribute('data-placeholder');
      }
      if (item.getAttribute('role') === 'menuitemcheckbox') item.setAttribute('aria-checked', item.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
      var fl = closest(item, '[data-rds-floating]'); if (fl && item.getAttribute('role') !== 'menuitemcheckbox') setOpen(fl, false);
    } else if (!closest(t, '[data-rds-floating]')) closeFloating(null);
    // tabs
    var tab = closest(t, '.rds-tabs__trigger');
    if (tab) {
      var list = closest(tab, '[role="tablist"]'), tabsRoot = closest(tab, '.rds-tabs') || document;
      $all(list, '.rds-tabs__trigger').forEach(function (b) {
        var on = b === tab; b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1;
        var p = b.getAttribute('aria-controls'); var panel = p && tabsRoot.querySelector('#' + p); if (panel) panel.hidden = !on;
      });
    }
    // toggles, pills, actions
    var tg = closest(t, '.rds-toggle, .rds-pill[aria-pressed], .rds-actions [aria-pressed]');
    if (tg) {
      var grp = closest(tg, '[data-rds-single]');
      if (grp) $all(grp, '[aria-pressed]').forEach(function (b) { b.setAttribute('aria-pressed', b === tg ? 'true' : 'false'); });
      else tg.setAttribute('aria-pressed', tg.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    }
    // overlays
    var opener = closest(t, '[data-rds-open]');
    if (opener) { var ov = document.querySelector(opener.getAttribute('data-rds-open')); if (ov) ov.setAttribute('data-open', ''); }
    if (closest(t, '[data-rds-close]')) { var o = closest(t, '.rds-overlay'); if (o) o.removeAttribute('data-open'); }
    if (t.classList && t.classList.contains('rds-overlay') && !t.hasAttribute('data-rds-modal')) t.removeAttribute('data-open');
    if (closest(t, '[data-rds-dismiss]')) { var d = closest(t, '.rds-toast, .rds-alert, .rds-attachment'); if (d) d.remove(); }
    if (closest(t, '[data-rds-toast]')) { var b = closest(t, '[data-rds-toast]'); toast({ title: b.getAttribute('data-rds-toast'), description: b.getAttribute('data-description'), variant: b.getAttribute('data-variant') || 'default' }); }
    // suggestions fill the composer, they never send (Mel web rule)
    var sug = closest(t, '.rds-suggestion');
    if (sug) {
      var scope = closest(sug, '.rds-shell, .rds-chat-scope') || document;
      var field = scope.querySelector('.rds-prompt__field');
      if (field) { field.value = sug.getAttribute('data-prompt') || sug.textContent.trim(); autosize(field); field.focus(); field.dispatchEvent(new Event('input', { bubbles: true })); }
    }
    // copy message
    var cp = closest(t, '[data-rds-copy]');
    if (cp) {
      var msg = closest(cp, '.rds-msg, .rds-code'); var src = msg && msg.querySelector('.rds-msg__content, pre');
      if (src && navigator.clipboard) navigator.clipboard.writeText(src.innerText).catch(function () {});
      cp.innerHTML = icon('check'); setTimeout(function () { cp.innerHTML = icon('copy'); }, 1400);
    }
    // carousel
    var nav = closest(t, '[data-rds-slide]');
    if (nav) { var car = closest(nav, '.rds-carousel'); var cur = +(car.getAttribute('data-index') || 0); var step = nav.getAttribute('data-rds-slide'); goSlide(car, step === 'prev' ? cur - 1 : step === 'next' ? cur + 1 : +step); }
    // calendar
    var calNav = closest(t, '[data-cal]');
    if (calNav) { var cal = closest(calNav, '[data-rds-calendar]'); var mm = +cal.getAttribute('data-month') + +calNav.getAttribute('data-cal'), yy = +cal.getAttribute('data-year'); if (mm < 0) { mm = 11; yy--; } if (mm > 11) { mm = 0; yy++; } cal.setAttribute('data-month', mm); cal.setAttribute('data-year', yy); renderCalendar(cal); }
    var day = closest(t, '.rds-calendar__day');
    if (day && day.getAttribute('data-day')) { var c2 = closest(day, '[data-rds-calendar]'); c2.setAttribute('data-selected', c2.getAttribute('data-year') + '-' + (+c2.getAttribute('data-month') + 1) + '-' + day.getAttribute('data-day')); c2.removeAttribute('data-range'); renderCalendar(c2); }
    // confirmation
    var cf = closest(t, '[data-rds-confirm]');
    if (cf) { var box = closest(cf, '.rds-confirm'); box.setAttribute('data-state', cf.getAttribute('data-rds-confirm')); var acts = box.querySelector('.rds-confirm__actions'); if (acts) acts.innerHTML = '<span class="rds-badge rds-badge--' + (cf.getAttribute('data-rds-confirm') === 'approved' ? 'success">' + icon('check') + ' Approved' : 'danger">' + icon('x') + ' Declined') + '</span>'; }
  });

  document.addEventListener('input', function (e) {
    var t = e.target;
    if (closest(t, '.rds-cpick__srch')) { var q = t.value.toLowerCase(); $all(closest(t, '.rds-cpick'), '.rds-cpick__opt:not(.rds-cpick__opt--all)').forEach(function (o) { o.hidden = o.textContent.toLowerCase().indexOf(q) < 0; }); }
    if (t.classList.contains('rds-slider')) syncSlider(t);
    if (t.classList.contains('rds-prompt__field')) { autosize(t); var p = closest(t, '.rds-prompt'); var s = p && p.querySelector('.rds-prompt__submit[data-auto]'); if (s) s.disabled = !t.value.trim(); }
    if (closest(t, '.rds-command__search')) {
      var cmd = closest(t, '.rds-command'), q = t.value.toLowerCase(), any = false;
      $all(cmd, '.rds-menu__item').forEach(function (i) { var hit = i.textContent.toLowerCase().indexOf(q) > -1; i.hidden = !hit; any = any || hit; });
      $all(cmd, '.rds-command__group').forEach(function (g) { g.hidden = !g.querySelector('.rds-menu__item:not([hidden])'); });
      if (any) cmd.removeAttribute('data-empty'); else cmd.setAttribute('data-empty', '');
    }
    if (t.classList.contains('rds-otp__slot') && t.value) { var all = $all(closest(t, '.rds-otp'), '.rds-otp__slot'); var n = all[all.indexOf(t) + 1]; if (n) n.focus(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeFloating(null); $all(document, '.rds-overlay[data-open]').forEach(function (o) { o.removeAttribute('data-open'); }); }
    var t = e.target;
    if (t.classList && t.classList.contains('rds-otp__slot') && e.key === 'Backspace' && !t.value) { var all = $all(closest(t, '.rds-otp'), '.rds-otp__slot'); var p = all[all.indexOf(t) - 1]; if (p) p.focus(); }
    if (t.classList && t.classList.contains('rds-tabs__trigger') && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      var tabs = $all(closest(t, '[role="tablist"]'), '.rds-tabs__trigger'); var i = tabs.indexOf(t) + (e.key === 'ArrowRight' ? 1 : -1);
      var nx = tabs[(i + tabs.length) % tabs.length]; nx.focus(); nx.click();
    }
  });

  /* Resizable panels */
  document.addEventListener('pointerdown', function (e) {
    var h = closest(e.target, '.rds-resizable__handle'); if (!h) return;
    var prev = h.previousElementSibling, wrap = h.parentElement, start = e.clientX, w0 = prev.getBoundingClientRect().width, total = wrap.getBoundingClientRect().width;
    h.setAttribute('data-dragging', ''); h.setPointerCapture(e.pointerId);
    function mv(ev) { var w = Math.max(60, Math.min(total - 60, w0 + ev.clientX - start)); prev.style.flex = '0 0 ' + w + 'px'; }
    function up() { h.removeAttribute('data-dragging'); h.removeEventListener('pointermove', mv); h.removeEventListener('pointerup', up); }
    h.addEventListener('pointermove', mv); h.addEventListener('pointerup', up);
  });

  window.RadiusUI = {
    version: '4.0.0', icon: icon, icons: Object.keys(ICONS), melMark: melMarkSVG, iconTile: iconTileSVG, glyphs: Object.keys(GLYPHS),
    init: init, toast: toast, traceLive: runTraceLive, calendar: renderCalendar, open: function (sel) { var o = document.querySelector(sel); if (o) o.setAttribute('data-open', ''); },
    close: function (sel) { var o = document.querySelector(sel); if (o) o.removeAttribute('data-open'); }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); }); else init(document);
})();
