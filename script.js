document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM (Completos) ---
    const introScreen = document.getElementById('intro-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const startScreen = document.getElementById('start-screen');
    const newGameButton = document.getElementById('new-game-button');
    const gameContainer = document.getElementById('game-container');
    const gameArea = document.getElementById('game-area');
    const castleHealthBar = document.getElementById('castle-health-bar');
    const castleHealthText = document.getElementById('castle-health-text');
    const moneyDisplay = document.getElementById('money-display');
    const gameMessage = document.getElementById('game-message');
    const restartButton = document.getElementById('restart-button');
    const buyButtons = document.querySelectorAll('.buy-button');
    const waveInfo = document.getElementById('wave-info');
    const grassElementsContainer = document.getElementById('grass-elements-container');
    const castleElement = document.getElementById('castle');
    const pauseButton = document.getElementById('pause-button');
    const shopToggleButton = document.getElementById('shop-toggle-button');
    const gameUI = document.getElementById('game-ui');
    const barricadeGhost = document.getElementById('barricade-ghost');
    const placementModeOverlay = document.getElementById('placement-mode-overlay');
    const cancelPlacementButton = document.getElementById('cancel-placement-button');
    const backToMenuButton = document.getElementById('back-to-menu-button');
    const backToMenuNavButton = document.getElementById('back-to-menu-nav-button');
    const castleShopContainer = document.getElementById('castle-shop');
    const soldier1 = document.getElementById('soldier1');
    const soldier2 = document.getElementById('soldier2');
    const enableDebugButton = document.getElementById('enable-debug-button');
    const toggleLogButton = document.getElementById('toggle-log-button');
    const debugLogOverlay = document.getElementById('debug-log-overlay');
    const closeLogButton = document.getElementById('close-log-button');
    const debugLogContent = document.getElementById('debug-log-content');
    const commandInput = document.getElementById('command-input');
    const sendCommandButton = document.getElementById('command-submit-button');
    const diamondDisplaySpan = document.querySelector('#diamond-display span');
    const bobsDisplaySpan = document.querySelector('#bobs-display span');
    const helpButton = document.getElementById('help-button');
    const commandHelpOverlay = document.getElementById('command-help-overlay');
    const closeHelpButton = document.getElementById('close-help-button');
    const commandHelpContent = document.getElementById('command-help-content');
    const toggleFullscreenButton = document.getElementById('toggle-fullscreen-button');
    const guardianShopContainer = document.getElementById('guardian-shop');
    const guardianPlacementArea = document.getElementById('guardian-placement-area');
    const guardianUiToggleButton = document.getElementById('guardian-ui-toggle-button');
    const guardianManagementPanel = document.getElementById('guardian-management-panel');
    const closeGuardianPanelButton = document.getElementById('close-guardian-panel-button');
    const guardianInventoryContainer = document.getElementById('guardian-inventory');
    const guardianSlotsContainer = document.getElementById('guardian-slots-display');
    const modsButton = document.getElementById('mods-button');
    const modScreen = document.getElementById('mod-screen');
    const modEditorScreen = document.getElementById('mod-editor-screen');
    const backToMenuFromModsButton = document.getElementById('back-to-menu-from-mods-button');
    const createNewButton = document.getElementById('create-new-mod-button');
    const addModButton = document.getElementById('add-mod-button');
    const modCodeInput = document.getElementById('mod-code-input');
    const modListContainer = document.getElementById('mod-list-container');
    const pixelEditorPanel = document.getElementById('pixel-editor-panel');
    const waveEditorPanel = document.getElementById('wave-editor-panel');
    const pixelGrid = document.getElementById('pixel-grid');
    const colorPalette = document.getElementById('color-palette');
    const statInputsContainer = document.getElementById('stat-inputs-container');
    const cancelModCreationButton = document.getElementById('cancel-mod-creation-button');
    const saveModButton = document.getElementById('save-mod-button');
    const addMonsterToWaveBtn = document.getElementById('add-monster-to-wave-btn');
    const waveMonsterList = document.getElementById('wave-monster-list');
    const pencilToolBtn = document.getElementById('pencil-tool-btn');
    const bucketToolBtn = document.getElementById('bucket-tool-btn');
    const eraserToolBtn = document.getElementById('eraser-tool-btn');
    const modCodeDisplayOverlay = document.getElementById('mod-code-display-overlay');
    const modCodeTextarea = document.getElementById('mod-code-textarea');
    const copyModCodeBtn = document.getElementById('copy-mod-code-btn');
    const addNewlyCreatedModBtn = document.getElementById('add-newly-created-mod-btn');
    const closeCodePanelBtn = document.getElementById('close-code-panel-btn');
    const savedGamesPanel = document.getElementById('saved-games-panel');
    const savePanelToggle = document.getElementById('save-panel-toggle');
    const saveSlotsContainer = document.getElementById('save-slots-container');
    const MAX_SAVE_SLOTS = 3;
    const customModalOverlay = document.getElementById('custom-modal-overlay');
    const customModalMessage = document.getElementById('custom-modal-message');
    const customModalInput = document.getElementById('custom-modal-input');
    const customModalActions = document.getElementById('custom-modal-actions');
    const onlineModsPanel = document.getElementById('online-mods-panel');
    const onlinePanelToggle = document.getElementById('online-panel-toggle');
    const onlineModSearch = document.getElementById('online-mod-search');
    const onlineModSort = document.getElementById('online-mod-sort');
    const onlineModList = document.getElementById('online-mod-list');
    const multiplayerButton = document.getElementById('multiplayer-button');
    const multiplayerLobbyScreen = document.getElementById('multiplayer-lobby-screen');
    const playWithAIButton = document.getElementById('play-with-ai-button');
    const backToMenuFromLobbyButton = document.getElementById('back-to-menu-from-lobby-button');
    const modSelectionScreen = document.getElementById('mod-selection-screen');
    const startAIGameWithModsButton = document.getElementById('start-ai-game-with-mods-button');
    const backToLobbyFromModSelectionButton = document.getElementById('back-to-lobby-from-mod-selection-button');
    const modSelectionTabMods = document.getElementById('mod-selection-tab-mods');
    const modSelectionTabPacks = document.getElementById('mod-selection-tab-packs');
    const modSelectionListContainer = document.getElementById('mod-selection-list-container');
    const modpackSelectionListContainer = document.getElementById('modpack-selection-list-container');
    const modSelectionList = document.getElementById('mod-selection-list');
    const modpackSelectionList = document.getElementById('modpack-selection-list');
    const castleAIElement = document.getElementById('castle-ai');
    const aiHudItem = document.getElementById('ai-hud-item');
    const castleHealthBarAI = document.getElementById('castle-health-bar-ai');
    const castleHealthTextAI = document.getElementById('castle-health-text-ai');
    const playerRespawnTimerElement = document.getElementById('player-respawn-timer');
    const aiRespawnTimerElement = document.getElementById('ai-respawn-timer');
    const playerCastleIndicator = document.getElementById('player-castle-indicator');
    const chatEmoteContainer = document.getElementById('chat-emote-container');
    const chatPanel = document.getElementById('chat-panel');
    const chatToggleButton = document.getElementById('chat-toggle-button');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const emoteToggleButton = document.getElementById('emote-toggle-button');
    const emotePicker = document.getElementById('emote-picker');
    const notificationBubblesContainer = document.getElementById('notification-bubbles-container');
    const socialProfileButton = document.getElementById('social-profile-button');
    const trophyCounter = document.getElementById('trophy-counter');
    const trophyValue = document.getElementById('trophy-value');
    const socialOverlay = document.getElementById('social-overlay');
    const authPanel = document.getElementById('auth-panel');
    const friendsPanel = document.getElementById('friends-panel');
    const authTitle = document.getElementById('auth-title');
    const authUsernameInput = document.getElementById('auth-username');
    const authPasswordInput = document.getElementById('auth-password');
    const authSubmitButton = document.getElementById('auth-submit-button');
    const authToggleLink = document.getElementById('auth-toggle-link');
    const friendsPanelTitle = document.getElementById('friends-panel-title');
    const friendsListContainer = document.getElementById('friends-list-container');
    const addFriendUsernameInput = document.getElementById('add-friend-username');
    const addFriendButton = document.getElementById('add-friend-button');
    const logoutButton = document.getElementById('logout-button');
    const interactiveNotification = document.getElementById('interactive-notification');
    const interactiveNotificationText = document.getElementById('interactive-notification-text');
    const notificationAcceptBtn = document.getElementById('notification-accept-btn');
    const notificationDeclineBtn = document.getElementById('notification-decline-btn');
    const postGameStats = document.getElementById('post-game-stats');
    const gameOverTitle = document.getElementById('game-over-title');
    const dmGroupsOverlay = document.getElementById('dm-and-groups-overlay');
    const dmGroupsMainPanel = document.getElementById('dm-groups-main-panel');
    const dmListContainer = document.getElementById('dm-list');
    const groupListContainer = document.getElementById('group-list');
    const showCreateGroupBtn = document.getElementById('show-create-group-btn');
    const chatViewPanel = document.getElementById('chat-view-panel');
    const chatBackButton = document.getElementById('chat-back-button');
    const chatWithName = document.getElementById('chat-with-name');
    const chatViewMessages = document.getElementById('chat-view-messages');
    const chatViewInput = document.getElementById('chat-view-input');
    const chatViewSendBtn = document.getElementById('chat-view-send-btn');
    const createGroupPanel = document.getElementById('create-group-panel');
    const createGroupNameInput = document.getElementById('create-group-name');
    const createGroupFriendsList = document.getElementById('create-group-friends-list');
    const createGroupConfirmBtn = document.getElementById('create-group-confirm-btn');
    const modTabLocal = document.getElementById('mod-tab-local');
    const modTabPacks = document.getElementById('mod-tab-packs');
    const localModsContent = document.getElementById('local-mods-content');
    const modpacksContent = document.getElementById('modpacks-content');
    const modpackListContainer = document.getElementById('modpack-list-container');
    const modpackEditorOverlay = document.getElementById('modpack-editor-overlay');
    const modpackEditorTitle = document.getElementById('modpack-editor-title');
    const modpackNameInput = document.getElementById('modpack-name-input');
    const addModsToPackList = document.getElementById('add-mods-to-pack-list');
    const cancelModpackCreationButton = document.getElementById('cancel-modpack-creation-button');
    const saveModpackButton = document.getElementById('save-modpack-button');
    const bobsMineButton = document.getElementById('bobs-mine-button');
    const bobsMineScreen = document.getElementById('bobs-mine-screen');
    const bobsMineCounterValue = document.getElementById('bobs-mine-value');
    const backToMenuFromMine = document.getElementById('back-to-menu-from-mine');
    const mineLevel1Area = document.getElementById('mine-level-1-area');
    const mineLevel2Area = document.getElementById('mine-level-2-area');
    const upgradeMineButton = document.getElementById('upgrade-mine-button');
    const bobsShopButton = document.getElementById('bobs-shop-button');
    const bobsShopScreen = document.getElementById('bobs-shop-screen');
    const bobsShopCounterValue = document.getElementById('bobs-shop-value');
    const backToMenuFromShop = document.getElementById('back-to-menu-from-shop');
    const bobsShopItemsContainer = document.getElementById('bobs-shop-items-container');
    const bobsInventoryToggleButton = document.getElementById('bobs-inventory-toggle-button');
    const bobsInventoryPanel = document.getElementById('bobs-inventory-panel');
    const closeBobsInventoryButton = document.getElementById('close-bobs-inventory-button');
    const bobsInventoryContent = document.getElementById('bobs-inventory-content');
    const placementReticle = document.getElementById('placement-reticle');
    const itemInfoModalOverlay = document.getElementById('item-info-modal-overlay');
    const itemInfoTitle = document.getElementById('item-info-title');
    const itemInfoDescription = document.getElementById('item-info-description');
    const itemInfoUsage = document.getElementById('item-info-usage');
    const itemInfoCloseButton = document.getElementById('item-info-close-button');

    // ### INÍCIO: Definição dos Mods e Modpacks Padrão ###

    const NIGHTMARE_MODS = [
        {
            id: 'nightmare_abomination',
            type: 'monster',
            name: 'Abominação Rastejante',
            health: 80,
            damage: 4,
            speed: 0.4,
            money: 40,
            spawnWaves: [8, 12, 16, 20],
            spawnCount: 1,
            isFlying: false,
            width: 50,
            height: 35,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'regen', amount: 1, interval: 1000 }],
            pixelData: ['transparent','transparent','transparent','transparent','#2E0A2E','#3A0C3A','#3A0C3A','#2E0A2E','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2E0A2E','#3A0C3A','#460E46','#521052','#521052','#460E46','#3A0C3A','#2E0A2E','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#691469','#751675','#751675','#691469','#521052','#460E46','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#691469','#811881','#811881','#811881','#691469','#521052','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','#460E46','#691469','#811881','#811881','#9D1C9D','#811881','#811881','#691469','#460E46','#3A0C3A','transparent','transparent','transparent','transparent','#521052','#751675','#8D1A8D','#9D1C9D','#9D1C9D','#8D1A8D','#811881','#691469','#521052','#460E46','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#811881','#9D1C9D','#FF0000','#9D1C9D','#9D1C9D','#811881','#691469','#460E46','#3A0C3A','transparent','transparent','transparent','#2E0A2E','#460E46','#691469','#811881','#9D1C9D','#9D1C9D','#9D1C9D','#811881','#811881','#691469','#460E46','#2E0A2E','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#691469','#811881','#8D1A8D','#811881','#691469','#521052','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2E0A2E','#460E46','#521052','#691469','#521052','#460E46','#2E0A2E','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#3A0C3A','#3A0C3A','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'nightmare_spectre',
            type: 'monster',
            name: 'Espectro Caçador',
            health: 25,
            damage: 3.5,
            speed: 2.0,
            money: 25,
            spawnWaves: [10, 14, 18, 22],
            spawnCount: 2,
            isFlying: true,
            width: 30,
            height: 55,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#3C3C3C','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2B2B2B','#3C3C3C','#FFFFFF','#FFFFFF','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#3C3C3C','#3C3C3C','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#1A1A1A','transparent','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'nightmare_abyss_eye',
            type: 'monster',
            name: 'Olho do Abismo',
            health: 40,
            damage: 1,
            speed: 0.8,
            money: 50,
            spawnWaves: [15, 19, 23],
            spawnCount: 1,
            isFlying: true,
            width: 45,
            height: 45,
            gridWidth: 16,
            gridHeight: 16,
            attackType: 'ranged',
            projectile: { type: 'corrupting_bolt', damage: 15, speed: 5, cooldown: 3000, range: 450 },
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','#1A1A1A','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#3C3C3C','#3C3C3C','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#3C3C3C','#4F4F4F','#691469','#691469','#4F4F4F','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','#2B2B2B','#4F4F4F','#691469','#8D1A8D','#8D1A8D','#8D1A8D','#691469','#4F4F4F','#2B2B2B','transparent','transparent','transparent','transparent','#2B2B2B','#691469','#8D1A8D','#FF0000','#FF0000','#8D1A8D','#8D1A8D','#691469','#2B2B2B','transparent','transparent','transparent','transparent','#3C3C3C','#691469','#8D1A8D','#FF0000','#000000','#FF0000','#8D1A8D','#691469','#3C3C3C','transparent','transparent','transparent','transparent','#3C3C3C','#691469','#8D1A8D','#FF0000','#FF0000','#8D1A8D','#8D1A8D','#691469','#3C3C3C','transparent','transparent','transparent','transparent','#2B2B2B','#691469','#8D1A8D','#8D1A8D','#8D1A8D','#8D1A8D','#8D1A8D','#691469','#2B2B2B','transparent','transparent','transparent','transparent','#2B2B2B','#4F4F4F','#691469','#691469','#691469','#691469','#691469','#4F4F4F','#2B2B2B','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#3C3C3C','#4F4F4F','#4F4F4F','#4F4F4F','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        }
    ];
    const NIGHTMARE_MODPACK = {
        id: 'default_nightmare_mode',
        name: 'NIGHTMARE MODE',
        mods: ['nightmare_abomination', 'nightmare_spectre', 'nightmare_abyss_eye'],
        active: false,
        isDefault: true
    };
    const GOLD_RUSH_MODS = [
        {
            id: 'gr_thief_goblin',
            type: 'monster',
            name: 'Goblin Ladrão',
            health: 15,
            damage: 0,
            speed: 2.5,
            money: 1,
            spawnWaves: [3, 6, 9, 12, 15],
            spawnCount: 3,
            isFlying: false,
            width: 30,
            height: 40,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'steal_money', percentage: 0.1 }],
            pixelData: ['transparent','transparent','transparent','transparent','transparent','#228B22','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#228B22','#006400','#006400','#006400','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#228B22','#3CB371','#000000','#000000','#3CB371','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#228B22','#3CB371','#3CB371','#3CB371','#228B22','transparent','transparent','transparent','#D2691E','#A0522D','transparent','transparent','transparent','#D2691E','#A0522D','#006400','#228B22','#228B22','#A0522D','#D2691E','transparent','transparent','#D2691E','#A0522D','#A0522D','transparent','transparent','#D2691E','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#D2691E','transparent','#A0522D','#FFD700','#FFD700','#A0522D','transparent','#D2691E','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#D2691E','#A0522D','#FFD700','#B8860B','#FFD700','#A0522D','#D2691E','#FFD700','#FFD700','#B8860B','#FFD700','#FFD700','#FFD700','#D2691E','#A0522D','#FFD700','#FFD700','#FFD700','#A0522D','#D2691E','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#D2691E','#A0522D','#A0522D','#A0522D','#A0522D','#D2691E','#A0522D','#B8860B','#B8860B','#B8860B','#B8860B','#B8860B','#B8860B','#D2691E','transparent','#D2691E','#D2691E','#D2691E','transparent','transparent','#228B22','#228B22','#228B22','#228B22','#228B22','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#006400','#006400','transparent','transparent','#006400','#006400','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'gr_golden_golem',
            type: 'monster',
            name: 'Golem Dourado',
            health: 2000,
            damage: 2,
            speed: 0.2,
            money: 800,
            spawnWaves: [10, 20],
            spawnCount: 1,
            isFlying: false,
            width: 70,
            height: 70,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','#808080','#696969','#696969','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#696969','#FFD700','#B8860B','#696969','#696969','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#808080','#FFD700','#FFD700','#B8860B','#B8860B','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#808080','#808080','#808080','#808080','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','#696969','#A9A9A9','#808080','#808080','#808080','#808080','#A9A9A9','#FFD700','#B8860B','#696969','transparent','transparent','transparent','#808080','#FFD700','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#B8860B','#FFD700','#808080','transparent','transparent','transparent','#696969','#B8860B','#A9A9A9','#C0C0C0','#C0C0C0','#A9A9A9','#A9A9A9','#FFD700','#B8860B','#696969','transparent','transparent','transparent','#808080','#FFD700','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#B8860B','#FFD700','#808080','transparent','transparent','transparent','#696969','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#696969','transparent','transparent','transparent','transparent','transparent','#696969','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#696969','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#FFD700','#B8860B','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#696969','#808080','#808080','#808080','#696969','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#696969','#696969','transparent','transparent','#696969','#696969','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'gr_mimic',
            type: 'monster',
            name: 'Mímico',
            health: 120,
            damage: 25,
            speed: 1.5,
            money: 150,
            spawnWaves: [8, 14, 18],
            spawnCount: 1,
            isFlying: false,
            width: 45,
            height: 40,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'disguise' }],
            pixelData: ['transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','#8B4513','#FFD700','#FFD700','#A0522D','#A0522D','#A0522D','#A0522D','#FFD700','#FFD700','#8B4513','transparent','transparent','transparent','transparent','#A0522D','#FFD700','#8B4513','#D2691E','#D2691E','#D2691E','#D2691E','#8B4513','#FFD700','#A0522D','transparent','transparent','transparent','transparent','#A0522D','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#A0522D','transparent','transparent','transparent','transparent','#A0522D','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#A0522D','transparent','transparent','transparent','transparent','#8B4513','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#8B4513','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#FFFFFF','#FFFFFF','#A0522D','#A0522D','#FFFFFF','#FFFFFF','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#FFFFFF','#FFFFFF','#8B4513','#8B4513','#FFFFFF','#FFFFFF','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'gr_bait_barricade',
            type: 'barricade',
            name: 'Barricada Isca',
            health: 25,
            cost: 10,
            width: 40,
            height: 40,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#FFD700','#FFD700','#FFD700','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#FFD700','#B8860B','#FFD700','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#FFD700','#FFD700','#FFD700','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'gr_mercenary',
            type: 'guardian',
            name: 'Mercenário',
            cost: 800,
            damage: 250,
            cooldown: 3000,
            range: 500,
            projectileSpeed: 15,
            projectileSize: 12,
            projectileColor: '#FF4500',
            width: 40,
            height: 50,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','#2F4F4F','#2F4F4F','#2F4F4F','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2F4F4F','#36454F','#36454F','#36454F','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2F4F4F','#C0C0C0','#808080','#808080','#C0C0C0','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#36454F','#C0C0C0','#C0C0C0','#C0C0C0','#C0C0C0','#36454F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#DEB887','#FFE4C4','#FFE4C4','#DEB887','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#36454F','#DEB887','#8B0000','#DEB887','#36454F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2F4F4F','#36454F','#DEB887','#DEB887','#36454F','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#36454F','#36454F','#36454F','#36454F','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#36454F','#transparent','#transparent','#36454F','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','transparent','transparent','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        }
    ];
    const GOLD_RUSH_MODPACK = {
        id: 'default_gold_rush',
        name: 'GOLD RUSH',
        mods: ['gr_thief_goblin', 'gr_golden_golem', 'gr_mimic', 'gr_bait_barricade', 'gr_mercenary'],
        active: false,
        isDefault: true
    };
    const CYBER_SIEGE_MODS = [
        {
            id: 'cs_attack_drone',
            type: 'monster',
            name: 'Drone de Ataque',
            health: 20,
            damage: 1,
            speed: 1.8,
            money: 8,
            spawnWaves: [4, 7, 11, 15],
            spawnCount: 5,
            isFlying: true,
            width: 35,
            height: 35,
            gridWidth: 16,
            gridHeight: 16,
            attackType: 'ranged',
            projectile: { type: 'laser_bolt', damage: 3, speed: 8, cooldown: 1200, range: 350 },
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','#707070','#808080','#909090','#909090','#808080','#707070','transparent','#404040','#404040','transparent','transparent','transparent','#404040','#505050','#909090','#FF0000','#909090','#505050','#404040','transparent','#505050','#505050','transparent','transparent','#505050','#606060','#808080','#A0A0A0','#A0A0A0','#808080','#606060','#505050','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'cs_brute_unit',
            type: 'monster',
            name: 'Unidade Brutamontes',
            health: 250,
            damage: 8,
            speed: 0.4,
            money: 40,
            spawnWaves: [9, 13, 17, 21],
            spawnCount: 2,
            isFlying: false,
            width: 60,
            height: 55,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'energy_shield', shieldHealth: 150 }],
            pixelData: ['transparent','transparent','#404040','#505050','#606060','#606060','#505050','#404040','#404040','#505050','#606060','#606060','#505050','#404040','transparent','transparent','transparent','#505050','#707070','#808080','#909090','#909090','#808080','#707070','#707070','#808080','#909090','#909090','#808080','#707070','#505050','transparent','transparent','#606060','#808080','#A0A0A0','#A0A0A0','#A0A0A0','#A0A0A0','#808080','#808080','#A0A0A0','#A0A0A0','#A0A0A0','#A0A0A0','#808080','#606060','transparent','transparent','#606060','#808080','#00FFFF','#00FFFF','#00FFFF','#A0A0A0','#808080','#808080','#A0A0A0','#00FFFF','#00FFFF','#00FFFF','#808080','#606060','transparent','transparent','#505050','#707070','#808080','#A0A0A0','#A0A0A0','#808080','#707070','#707070','#808080','#A0A0A0','#A0A0A0','#808080','#707070','#505050','transparent','transparent','#404040','#606060','#707070','#808080','#808080','#707070','#606060','#606060','#707070','#808080','#808080','#707070','#606060','#404040','transparent','transparent','transparent','#404040','#505050','#606060','#606060','#505050','#404040','#404040','#505050','#606060','#606060','#505050','#404040','transparent','transparent','transparent','transparent','#303030','#404040','#404040','#303030','transparent','transparent','transparent','#303030','#404040','#404040','#303030','transparent','transparent','transparent','transparent','#202020','#303030','#303030','#202020','transparent','transparent','transparent','#202020','#303030','#303030','#202020','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'cs_emp_disruptor',
            type: 'monster',
            name: 'Disruptor PEM',
            health: 80,
            damage: 0,
            speed: 0.9,
            money: 30,
            spawnWaves: [12, 16, 20],
            spawnCount: 1,
            isFlying: false,
            width: 50,
            height: 40,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'emp_blast', range: 250, duration: 5000 }],
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#404040','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#404040','#303030','transparent','transparent','#303030','#505050','#606060','#606060','#606060','#606060','#606060','#606060','#606060','#606060','#606060','#505050','#303030','transparent','transparent','#404050','#606070','#808090','#00BFFF','#00BFFF','#808090','#808090','#00BFFF','#00BFFF','#808090','#606070','#404050','transparent','transparent','transparent','#404050','#606070','#808090','#808090','#808090','#606070','#606070','#808090','#808090','#808090','#606070','#404050','transparent','transparent','transparent','#303030','#505050','#606060','#606060','#505050','#505050','#606060','#606060','#505050','#303030','transparent','transparent','transparent','transparent','#303030','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#303030','transparent','transparent','transparent','transparent','#303030','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'cs_plasma_turret',
            type: 'guardian',
            name: 'Torre de Plasma',
            cost: 220,
            damage: 60,
            cooldown: 2500,
            range: 300,
            projectileSpeed: 4,
            projectileSize: 20,
            projectileColor: '#00FF00',
            width: 40,
            height: 50,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#606060','#707070','#707070','#606060','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#606060','#808080','#909090','#808080','#606060','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#00FF00','#00FF00','#00FF00','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#00FF00','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#505050','#505050','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#404040','#404040','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'cs_tesla_cannon',
            type: 'guardian',
            name: 'Canhão Tesla',
            cost: 300,
            damage: 15,
            cooldown: 1800,
            range: 280,
            projectileSpeed: 20,
            projectileSize: 5,
            projectileColor: '#00FFFF',
            abilities: [{ type: 'chain_lightning', chains: 3, bounceRange: 100 }],
            width: 40,
            height: 50,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','#00FFFF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#00FFFF','#C0C0C0','#00FFFF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#00FFFF','#C0C0C0','#C0C0C0','#C0C0C0','#00FFFF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#606060','#808080','#A0A0A0','#808080','#606060','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#606060','#808080','#606060','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#505050','#505050','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#404040','#404040','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        }
    ];
    const CYBER_SIEGE_MODPACK = {
        id: 'default_cyber_siege',
        name: 'CYBER SIEGE',
        mods: ['cs_attack_drone', 'cs_brute_unit', 'cs_emp_disruptor', 'cs_plasma_turret', 'cs_tesla_cannon'],
        active: false,
        isDefault: true
    };
    const ELEMENTAL_FURY_MODS = [
        {
            id: 'ef_magma_elemental',
            type: 'monster',
            name: 'Elemental de Magma',
            health: 150,
            damage: 5,
            speed: 0.6,
            money: 25,
            spawnWaves: [5, 10, 15, 20],
            spawnCount: 3,
            isFlying: false,
            width: 45,
            height: 55,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'immunity', damageType: 'fire' }, { type: 'lava_trail' }],
            pixelData: ['transparent','transparent','transparent','#401000','#8B0000','#FF4500','#8B0000','#401000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#FF4500','#FFA500','#FFA500','#FF4500','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#FF4500','#FF4500','#FF4500','#FF4500','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#FF4500','#FFA500','#FFFF00','#FFFF00','#FFA500','#FF4500','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#FF4500','#FFA500','#FFA500','#FFA500','#FF4500','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#FF4500','#FF4500','#FF4500','#FF4500','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#401000','#8B0000','#FFA500','#FFA500','#8B0000','#401000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#401000','#8B0000','#8B0000','#401000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#401000','#401000','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#FF4500','#8B0000','transparent','transparent','#8B0000','#FF4500','transparent','transparent','transparent','transparent','transparent','transparent','#FFA500','#401000','transparent','transparent','#401000','#FFA500','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'ef_ice_golem',
            type: 'monster',
            name: 'Golem de Gelo',
            health: 300,
            damage: 10,
            speed: 0.3,
            money: 50,
            spawnWaves: [12, 18, 22],
            spawnCount: 1,
            isFlying: false,
            width: 60,
            height: 65,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'immunity', effectType: 'slow' }, { type: 'frost_nova', chance: 0.2 }],
            pixelData: ['transparent','transparent','transparent','#F0F8FF','#FFFFFF','#FFFFFF','#F0F8FF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#ADD8E6','#F0F8FF','#FFFFFF','#FFFFFF','#F0F8FF','#ADD8E6','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#F0F8FF','#FFFFFF','#F0F8FF','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#ADD8E6','#ADD8E6','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','#B0E0E6','#87CEEB','#ADD8E6','#ADD8E6','#ADD8E6','#ADD8E6','#87CEEB','#B0E0E6','transparent','transparent','transparent','#F0F8FF','#B0E0E6','#87CEEB','#87CEEB','#87CEEB','#87CEEB','#87CEEB','#B0E0E6','#F0F8FF','transparent','transparent','#FFFFFF','#F0F8FF','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#F0F8FF','#FFFFFF','transparent','transparent','#ADD8E6','#F0F8FF','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#F0F8FF','#ADD8E6','transparent','transparent','transparent','transparent','#ADD8E6','#F0F8FF','#B0E0E6','#B0E0E6','#F0F8FF','#ADD8E6','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#ADD8E6','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#B0E0E6','#87CEEB','transparent','transparent','#87CEEB','#B0E0E6','transparent','transparent','transparent','transparent','transparent','transparent','#F0F8FF','#ADD8E6','transparent','transparent','#ADD8E6','#F0F8FF','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'ef_storm_spirit',
            type: 'monster',
            name: 'Espírito da Tempestade',
            health: 70,
            damage: 3,
            speed: 1.2,
            money: 35,
            spawnWaves: [9, 14, 19],
            spawnCount: 2,
            isFlying: true,
            width: 40,
            height: 60,
            gridWidth: 16,
            gridHeight: 16,
            abilities: [{ type: 'blink', interval: 4000, duration: 1500 }],
            pixelData: ['transparent','transparent','transparent','transparent','transparent','#FFFF00','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#FFFFFF','#FFFFFF','#C0C0C0','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#C0C0C0','#FFFFFF','#D3D3D3','#D3D3D3','#FFFFFF','#C0C0C0','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#FFFFFF','#FFFFFF','#C0C0C0','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#C0C0C0','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#C0C0C0','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#A9A9A9','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#808080','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','transparent','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'ef_fire_mage',
            type: 'guardian',
            name: 'Mago de Fogo',
            cost: 250,
            damage: 20,
            cooldown: 2000,
            range: 320,
            projectileSpeed: 8,
            projectileSize: 15,
            projectileColor: '#FF4500',
            abilities: [{ type: 'apply_burn', dps: 5, duration: 3000 }],
            width: 40,
            height: 50,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','#8B0000','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#B22222','#FF4500','#FF4500','#B22222','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#B22222','#FF4500','#FFA500','#FF4500','#B22222','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#6A5ACD','#6A5ACD','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#DEB887','#FFFF00','#DEB887','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#6A5ACD','#DEB887','#6A5ACD','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#800080','#4B0082','#4B0082','#800080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#800080','#800080','#4B0082','#4B0082','#4B0082','#800080','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#800080','#4B0082','#4B0082','#800080','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#4B0082','transparent','transparent','#4B0082','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        },
        {
            id: 'ef_freezing_tower',
            type: 'guardian',
            name: 'Torre Congelante',
            cost: 180,
            damage: 10,
            cooldown: 2200,
            range: 250,
            projectileSpeed: 6,
            projectileSize: 18,
            projectileColor: '#00FFFF',
            abilities: [{ type: 'area_slow', radius: 60, slowFactor: 0.5 }],
            width: 40,
            height: 50,
            gridWidth: 16,
            gridHeight: 16,
            pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#F0F8FF','#FFFFFF','#F0F8FF','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#87CEEB','#00FFFF','#87CEEB','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#5F9EA0','#87CEEB','#5F9EA0','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#5F9EA0','#5F9EA0','#5F9EA0','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#5F9EA0','#5F9EA0','#5F9EA0','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','#1E90FF','#4682B4','#5F9EA0','#5F9EA0','#4682B4','#1E90FF','transparent','transparent','transparent','transparent','transparent','#0000CD','#1E90FF','#4682B4','#4682B4','#1E90FF','#0000CD','transparent','transparent','transparent','transparent','transparent','#00008B','#0000CD','#1E90FF','#1E90FF','#0000CD','#00008B','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
        }
    ];
    const ELEMENTAL_FURY_MODPACK = {
        id: 'default_elemental_fury',
        name: 'ELEMENTAL FURY',
        mods: ['ef_magma_elemental', 'ef_ice_golem', 'ef_storm_spirit', 'ef_fire_mage', 'ef_freezing_tower'],
        active: false,
        isDefault: true
    };

    // --- Configurações do Jogo ---
    const weapons = [ { name: "Cuspe", damage: 2, cost: 0, cooldown: 500, color: '#add8e6', size: 8, speed: 8, cssClass: 'spit' }, { name: "Pedra", damage: 8, cost: 50, cooldown: 400, color: '#8B4513', size: 12, speed: 10, cssClass: 'stone' }, { name: "Bomba de Tinta", damage: 20, cost: 150, cooldown: 800, color: '#FF00FF', size: 20, speed: 6, cssClass: 'ink', effect: 'slow' }, { name: "Bola de Fogo", damage: 50, cost: 400, cooldown: 1200, color: '#FF4500', size: 25, speed: 7, cssClass: 'fire' }, { name: "Papergun", damage: 10, cost: 500, cooldown: 250, color: '#e9ecef', size: 10, speed: 12, cssClass: 'paper' } ];
    const baseBarricadeTypes = [ { id: 'barricade_wood', name: "Madeira", health: 10, cost: 15, width: 40, height: 60, color: '#a0522d', border: '2px solid #8b4513' }, { id: 'barricade_blue', name: "Azul", health: 20, cost: 30, width: 45, height: 65, color: '#4682b4', border: '2px solid #36648b' }, { id: 'barricade_stone', name: "Pedra", health: 35, cost: 60, width: 50, height: 70, color: '#808080', border: '3px solid #696969' }, { id: 'barricade_metal', name: "Metal", health: 80, cost: 120, width: 55, height: 75, color: '#c0c0c0', border: '4px solid #a9a9a9' } ];
    const baseMonsterTypes = [ { id:'goblin', name: "Goblin", health: 10, damage: 1.5, speed: 1.0, money: 5, width: 30, height: 30, elementCreator: createGoblinElement }, { id:'bat', name: "Morcego", health: 8, damage: 0.5, speed: 1.8, money: 3, width: 30, height: 20, elementCreator: createBatElement, isFlying: true }, { id:'slime', name: "Slime", health: 20, damage: 2, speed: 0.8, money: 10, width: 45, height: 45, elementCreator: createSlimeElement }, { id:'zombie', name: "Zumbi", health: 30, damage: 2.5, speed: 0.7, money: 15, width: 40, height: 50, elementCreator: createZombieElement }, { id:'skeleton', name: "Esqueleto", health: 25, damage: 1, speed: 1.2, money: 20, width: 40, height: 50, elementCreator: createSkeletonElement, attackType: 'ranged', projectile: { type: 'arrow', damage: 5, speed: 7, cooldown: 1500, range: 300 } }, { id:'ghost', name: "Fantasma", health: 15, damage: 1.0, speed: 1.5, money: 25, width: 40, height: 50, elementCreator: createGhostElement, isFlying: true }, { id:'ogre', name: "Ogre", health: 60, damage: 5, speed: 0.5, money: 30, width: 60, height: 60, elementCreator: createOgreElement }, { id:'dark-mage', name: "Mago Sombrio", health: 30, damage: 2, speed: 0.9, money: 35, width: 40, height: 50, elementCreator: createDarkMageElement, attackType: 'ranged', projectile: { type: 'magic-orb', damage: 10, speed: 6, cooldown: 2000, range: 400 } }, { id:'stone-golem', name: "Golem de Pedra", health: 100, damage: 7, speed: 0.3, money: 50, width: 60, height: 60, elementCreator: createStoneGolemElement }, { id:'dragon', name: "Dragão", health: 250, damage: 15, speed: 0.4, money: 100, width: 80, height: 70, elementCreator: createDragonElement, isFlying: true, attackType: 'ranged', projectile: { type: 'fireball', damage: 20, speed: 5, cooldown: 2500, range: 500 } }, ];
    const specialItems = { 'full_heal': { name: "Recuperação Total", cost: 15, costType: 'diamond' } };
    const castles = {
        'wood': [ { name: "Madeira", cost: 0, maxHealth: 30, abilities: [], cssClass: 'castle-wood' } ],
        'clay': [ { name: "Barro", cost: 50, maxHealth: 20, abilities: [{ type: 'regen', amount: 1, interval: 2000 }], cssClass: 'castle-clay' }, { name: "Barro", cost: 35, maxHealth: 25, abilities: [{ type: 'regen', amount: 1, interval: 1300 }], cssClass: 'castle-clay castle-clay-1' }, { name: "Barro", cost: 70, maxHealth: 25, abilities: [{ type: 'regen', amount: 1, interval: 1000 }], cssClass: 'castle-clay castle-clay-2' }, { name: "Barro", cost: 180, maxHealth: 35, abilities: [{ type: 'regen', amount: 1, interval: 600 }], cssClass: 'castle-clay castle-clay-3' }, ],
        'stone': [ { name: "Pedra", cost: 200, maxHealth: 30, abilities: [{ type: 'auto-attack', weaponIndex: 1, interval: 1000 }], cssClass: 'castle-stone' }, { name: "Pedra", cost: 150, maxHealth: 35, abilities: [{ type: 'auto-attack', weaponIndex: 1, damage: 10, interval: 1000 }], cssClass: 'castle-stone castle-stone-1' }, { name: "Pedra", cost: 325, maxHealth: 40, abilities: [{ type: 'auto-attack', weaponIndex: 1, damage: 15, interval: 1000 }], cssClass: 'castle-stone castle-stone-2' }, { name: "Pedra", cost: 690, maxHealth: 50, abilities: [{ type: 'auto-attack', weaponIndex: 2, interval: 1000 }], cssClass: 'castle-stone castle-stone-3' }, ],
        'aluminum': [ { name: "Alumínio", cost: 400, maxHealth: 60, abilities: [], cssClass: 'castle-aluminum' }, { name: "Alumínio", cost: 200, maxHealth: 80, abilities: [], cssClass: 'castle-aluminum castle-aluminum-1' }, { name: "Alumínio", cost: 430, maxHealth: 95, abilities: [], cssClass: 'castle-aluminum castle-aluminum-2' }, { name: "Alumínio", cost: 900, maxHealth: 145, abilities: [], cssClass: 'castle-aluminum castle-aluminum-3' }, ],
        'emerald': [ { name: "Esmeralda", cost: 50, maxHealth: 40, abilities: [{ type: 'generate-money', amount: 30, interval: 10000 }], cssClass: 'castle-emerald', costType: 'diamond' } ]
    };
    const baseGuardianTypes = {
        'archer': { id: 'archer', name: 'Arqueiro', evolutions: [ { cost: 75, damage: 6, cooldown: 1000, range: 350 }, { cost: 150, damage: 9, cooldown: 850, range: 400 }, { cost: 300, damage: 14, cooldown: 700, range: 450 }, { cost: 550, damage: 20, cooldown: 650, range: 475 } ], projectile: { speed: 10, size: 8, color: '#8B4513', cssClass: 'arrow' }, width: 40, height: 50 },
        'cannon': { id: 'cannon', name: 'Canhão', evolutions: [ { cost: 200, damage: 40, cooldown: 4500, range: 280, aoeRadius: 40 }, { cost: 350, damage: 65, cooldown: 4200, range: 320, aoeRadius: 50 }, { cost: 600, damage: 90, cooldown: 4000, range: 350, aoeRadius: 60 }, { cost: 1100, damage: 125, cooldown: 3800, range: 370, aoeRadius: 65 } ], projectile: { speed: 5, size: 18, color: '#333', cssClass: 'cannonball' }, width: 40, height: 50 },
        'ice_mage': { id: 'ice_mage', name: 'Mago Gelo', evolutions: [ { cost: 180, damage: 5, cooldown: 2000, range: 300 }, { cost: 300, damage: 8, cooldown: 1800, range: 350 }, { cost: 550, damage: 12, cooldown: 1600, range: 400 }, { cost: 900, damage: 18, cooldown: 1500, range: 425 } ], projectile: { speed: 7, size: 12, color: '#00c0ff', cssClass: 'ice_bolt', effect: 'slow' }, width: 40, height: 50 },
        'machine_gun': { id: 'machine_gun', name: 'Metralha', evolutions: [ { cost: 400, damage: 4, cooldown: 150, range: 250 }, { cost: 650, damage: 6, cooldown: 120, range: 280 }, { cost: 900, damage: 8, cooldown: 100, range: 300 }, { cost: 1500, damage: 11, cooldown: 90, range: 320 } ], projectile: { speed: 15, size: 6, color: '#ffc107', cssClass: 'bullet' }, width: 40, height: 50 },
        'heavy_crossbow': { id: 'heavy_crossbow', name: 'Besta P.', evolutions: [ { cost: 350, damage: 60, cooldown: 3500, range: 500 }, { cost: 600, damage: 100, cooldown: 3200, range: 550 }, { cost: 1000, damage: 150, cooldown: 3000, range: 600 }, { cost: 1800, damage: 220, cooldown: 2900, range: 650 } ], projectile: { speed: 12, size: 10, color: '#5d4037', cssClass: 'crossbow_bolt' }, width: 40, height: 50 },
    };
    const BOBS_SHOP_ITEMS = {
        zap: {
            name: "Raio",
            description: "Atordoa e causa dano a inimigos em uma pequena área.",
            usage: "Abra o inventário, selecione o Raio e dê um clique duplo na área onde deseja lançá-lo.",
            cost: 150, icon: "⚡", type: 'targeted',
            effect: { type: 'area_stun', damage: 15, radius: 60, duration: 2000 }
        },
        arrows: {
            name: "Flechas",
            description: "Uma chuva de flechas atinge uma grande área, causando dano a todos os inimigos no local.",
            usage: "Abra o inventário, selecione as Flechas e dê um clique duplo na área alvo.",
            cost: 200, icon: "🏹", type: 'targeted',
            effect: { type: 'rain_damage', damagePerArrow: 5, radius: 100, arrowCount: 15 }
        },
        rage: {
            name: "Fúria",
            description: "Aumenta o dano de todas as suas defesas (guardiões e castelo) em 50% por 10 segundos.",
            usage: "Abra o inventário e clique na poção para ativá-la instantaneamente.",
            cost: 400, icon: "😡", type: 'instant',
            effect: { type: 'rage_buff', multiplier: 1.5, duration: 10000 }
        },
        survival1: {
            name: "Sobrevida I",
            description: "Aumenta a vida máxima do seu castelo em +5 permanentemente. O efeito é imediato.",
            usage: "Abra o inventário e clique na poção para consumi-la e ganhar o bônus.",
            cost: 300, icon: "❤️", type: 'instant',
            effect: { type: 'max_health_increase', amount: 5 }
        },
        survival2: {
            name: "Sobrevida II",
            description: "Aumenta a vida máxima do seu castelo em +10 permanentemente.",
            usage: "Abra o inventário e clique na poção para consumi-la e ganhar o bônus.",
            cost: 550, icon: "🧡", type: 'instant',
            effect: { type: 'max_health_increase', amount: 10 }
        },
        survival3: {
            name: "Sobrevida III",
            description: "Aumenta a vida máxima do seu castelo em +20 permanentemente.",
            usage: "Abra o inventário e clique na poção para consumi-la e ganhar o bônus.",
            cost: 1000, icon: "💛", type: 'instant',
            effect: { type: 'max_health_increase', amount: 20 }
        }
    };
    const guardianSlotPositions = [ { x: 105, y: 30 }, { x: 120, y: 50 }, { x: 105, y: 70 }];
    const aiPhrases = {
        start: ["Vamos lá! Boa sorte para nós.", "Que comece a defesa!", "Espero que você seja um bom parceiro.", "Vamos mostrar pra eles!", "Pela honra do nosso castelo!", "Que nossas defesas sejam impenetráveis."],
        danger: ["Estou com problemas aqui!", "Preciso de ajuda! Minha vida está baixa!", "Cuidado, estou quase caindo!", "Eles estão focando em mim!", "Isso não parece bom...", "Estou em uma situação complicada!"],
        emoteReaction: { '😀': ["Hehe, que bom humor!", "É isso aí! Positividade!", "👍"], '😂': ["Hahaha, essa foi boa!", "Muito engraçado!", "😂"], '👍': ["Valeu pelo apoio!", "Tamo junto!", "Aprovado! 👍"], '⚔️': ["PARA A BATALHA!", "Sem piedade!", "Esmaguem eles!"], '💰': ["Foco no din din!", "Ouro é poder!", "Vamos ficar ricos!"], '😢': ["Oh não, o que aconteceu?", "Não fique triste, vamos vencer!", "Fique firme!"], '😠': ["Calma! A raiva não nos ajudará.", "Foque essa energia nos monstros!", "Respira fundo."], '😱': ["O que foi isso?!", "Que susto! Mantenha a calma!", "AHHH! Cuidado!"], '❓': ["Não entendi. Foco na batalha!", "Sem tempo para perguntas, temos que lutar!", "O que quer dizer?"], '🙏': ["Estou torcendo por nós também!", "Com sorte, venceremos.", "Que os deuses da defesa nos ajudem!"] },
        waveStart: ["Atenção, mais uma onda vindo!", "Se preparem!", "Lá vem mais deles!", "Posições! Nova horda a caminho.", "Aí vem problema.", "Fechem os portões! Eles chegaram."],
        waveEnd: ["Ufa, essa foi por pouco.", "Onda finalizada. Bom trabalho!", "Respirem fundo, a próxima será pior.", "Conseguimos! Por enquanto...", "Sobrevivemos. Por ora.", "Uma pequena pausa antes da próxima tempestade."],
        guardianPurchase: ["Reforço novo na área!", "Contratei um ajudante.", "Bem-vindo ao time, amigão.", "Mais um para a nossa causa."],
        guardianEvolve: ["Meu guardião está mais forte!", "Sentiram o poder?!", "Evolução completa!", "Sinta o poder da evolução!"],
        castleUpgrade: ["Nosso lar está mais seguro!", "Fiz um upgrade no castelo.", "Agora sim, uma fortaleza!", "Nossas muralhas estão mais fortes."],
        idle: [ "Você está se saindo bem.", "Fique de olho no seu ouro.", "Essa horda não tem fim?", "Acho que vi um goblin gigante...", "Lembre-se de evoluir os guardiões.", "Será que a gente ganha um dia de folga depois disso?", "Cada moeda conta.", "Esses monstros são persistentes.", "Cuidado com os voadores, eles são traiçoeiros.", "Estamos fazendo um bom trabalho de equipe!", "Minha torre parece mais alta que a sua...", "Será que tem pizza depois?", "Ugh, odeio slimes."]
    };

    // --- Estado do Jogo ---
    let castleHealth, MAX_CASTLE_HEALTH, castleAbilityIntervals;
    let currentCastleType, currentCastleEvolution;
    let money, projectiles, monsterProjectiles, monsters, barricades, purchasedWeapons;
    let diamonds, strongMonsterKillCount, bobs;
    let gameLoopInterval, monsterSpawnInterval, isGameOver, isPaused, currentWave, isWaveClearMessageSent;
    let monstersKilledThisWave, totalMonstersToSpawn, monstersSpawnedThisWave, lastMonsterSpawnTime;
    let currentWeaponIndex, lastShotTime, placingBarricade;
    let isDebugModeEnabled = false, isGodMode = false;
    let placingSpell = null;
    let isRageActive = false;
    let rageTimeout = null;
    let guardianSlots, guardianInventory, selectedGuardianInventoryIndex;
    let currentWaveSpawnList = [];
    let loadedSaveSlotIndex = null;
    let gameMode = 'single';
    let castleHealthAI, MAX_CASTLE_HEALTH_AI, castleAbilityIntervalsAI;
    let currentCastleTypeAI, currentCastleEvolutionAI;
    let isPlayerCastleDestroyed, isCastleAIDestroyed;
    let playerRespawnTimer, aiRespawnTimer;
    let aiLogicInterval, aiAttackInterval;
    let guardianInventoryAI, guardianSlotsAI;
    let allMods = [];
    let allModpacks = [];
    let currentModpackEditing = null;
    let currentModTab = 'local';
    let activeGameMonsterTypes, activeGameGuardianTypes, activeGameBarricadeTypes, customWaveDefinitions;
    let editorCurrentType = 'monster', editorCurrentColor = '#FFFFFF', isDrawing = false, editorCurrentTool = 'pencil';
    let newlyCreatedMod = null;
    let editorGridSize = { width: 16, height: 16 };
    const editorPaletteColors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#C0C0C0', '#800000', '#008000', '#000080', '#808000', '#800080', '#008080', '#a0522d', '#8B4513', '#228B22', '#556b2f', 'transparent', '#ffc0cb', '#ff69b4', '#ff1493', '#d2691e', '#a52a2a', '#6b4423', '#f5deb3', '#ffdab9', '#e6e6fa', '#d8bfd8', '#b0c4de', '#add8e6', '#90ee90', '#3cb371', '#66cdaa', '#f0e68c', '#eee8aa', '#fafad2', '#d3d3d3', '#a9a9a9'];
    const SPRITE_PATH = 'sprites/';
    const spriteStatus = new Map();
    const JSONBIN_ID = '685aeeb38960c979a5b0b5f8';
    const JSONBIN_API_KEY = '$2a$10$4tbHfolQwMBQAiybZXK0ruCq0xYIPmFuq8NMAqrP89muVvvgQavta';
    const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_ID}`;
    const MODPACK_JSONBIN_ID = '68a0dc33ae596e708fcbaabd';
    const MODPACK_JSONBIN_URL = `https://api.jsonbin.io/v3/b/${MODPACK_JSONBIN_ID}`;
    const SOCIAL_JSONBIN_ID = '685c74f28960c979a5b17276';
    const SOCIAL_JSONBIN_API_KEY = '$2a$10$4tbHfolQwMBQAiybZXK0ruCq0xYIPmFuq8NMAqrP89muVvvgQavta';
    const SOCIAL_JSONBIN_URL = `https://api.jsonbin.io/v3/b/${SOCIAL_JSONBIN_ID}`;
    let currentUser = null;
    let isAuthPanelInLoginMode = false;
    let socialPollInterval = null;
    let currentNotification = null;
    let currentOpenChat = null;
    let chatPollInterval = null;

    // --- Funções de "Desenho" e Criação de Elementos ---
    function createGoblinElement() { 
        if (spriteStatus.get('goblin') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}goblin.png`;
            img.style.cssText = "width:30px;height:30px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.style.cssText="width:30px;height:30px;background-color:#228B22;border:2px solid #006400;border-radius:50%;position:absolute;transition:transform .1s,opacity .1s;box-shadow:inset 0 0 5px rgba(0,0,0,.3)"; e.innerHTML=`<div style="position:absolute;top:8px;left:7px;width:5px;height:5px;background:black;border-radius:50%"></div><div style="position:absolute;top:8px;right:7px;width:5px;height:5px;background:black;border-radius:50%"></div><div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:15px;height:3px;background:black;border-radius:2px"></div>`; return e; 
    }
    function createSlimeElement() { 
        if (spriteStatus.get('slime') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}slime.png`;
            img.style.cssText = "width:45px;height:45px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.style.cssText="width:45px;height:45px;background-color:#8A2BE2;border:2px solid #4B0082;border-radius:60% 40% 50% 50%/60% 60% 40% 40%;position:absolute;transition:transform .1s,opacity .1s;box-shadow:inset 0 0 5px rgba(0,0,0,.3)"; e.innerHTML=`<div style="position:absolute;top:12px;left:10px;width:8px;height:8px;background:white;border-radius:50%;border:1px solid black"></div><div style="position:absolute;top:12px;right:10px;width:8px;height:8px;background:white;border-radius:50%;border:1px solid black"></div>`; return e; 
    }
    function createOgreElement() {
        if (spriteStatus.get('ogre') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}ogre.png`;
            img.style.cssText = "width:60px;height:60px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.style.cssText="width:60px;height:60px;background-color:#B22222;border:3px solid #8B0000;border-radius:10px;position:absolute;transition:transform .1s,opacity .1s;box-shadow:inset 0 0 8px rgba(0,0,0,.4)"; e.innerHTML=`<div style="position:absolute;top:15px;left:15px;width:10px;height:10px;background:black;border-radius:50%"></div><div style="position:absolute;top:15px;right:15px;width:10px;height:10px;background:black;border-radius:50%"></div><div style="position:absolute;bottom:15px;left:50%;transform:translateX(-50%);width:30px;height:5px;background:black;border-radius:3px"></div>`; return e; 
    }
    function createZombieElement() {
        if (spriteStatus.get('zombie') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}zombie.png`;
            img.style.cssText = "width:40px;height:50px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','zombie'); e.style.position='absolute'; return e; 
    }
    function createSkeletonElement() { 
        if (spriteStatus.get('skeleton') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}skeleton.png`;
            img.style.cssText = "width:40px;height:50px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','skeleton'); e.style.position='absolute'; e.innerHTML=`<div class="mouth"></div><div class="ribcage"></div>`; return e; 
    }
    function createGhostElement() { 
        if (spriteStatus.get('ghost') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}ghost.png`;
            img.style.cssText = "width:40px;height:50px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','ghost'); e.style.position='absolute'; e.innerHTML=`<div class="tail"></div>`; return e; 
    }
    function createStoneGolemElement() { 
        if (spriteStatus.get('stone-golem') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}stone-golem.png`;
            img.style.cssText = "width:60px;height:60px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','stone-golem'); e.style.position='absolute'; e.innerHTML=`<div class="crack"></div>`; return e; 
    }
    function createDarkMageElement() { 
        if (spriteStatus.get('dark-mage') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}dark-mage.png`;
            img.style.cssText = "width:40px;height:50px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','dark-mage'); e.style.position='absolute'; e.innerHTML=`<div class="eye left"></div><div class="eye right"></div><div class="staff"></div>`; return e; 
    }
    function createBatElement() { 
        if (spriteStatus.get('bat') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}bat.png`;
            img.style.cssText = "width:30px;height:20px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','bat'); e.style.position='absolute'; return e; 
    }
    function createDragonElement() { 
        if (spriteStatus.get('dragon') === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}dragon.png`;
            img.style.cssText = "width:80px;height:70px;position:absolute;";
            return img;
        }
        const e=document.createElement('div'); e.classList.add('monster','dragon'); e.style.position='absolute'; e.innerHTML=`<div class="head"></div><div class="wing"></div>`; return e; 
    }
    function createBarricadeElement(type) { const e=document.createElement('div'); e.classList.add('barricade','spawning'); e.style.cssText=`width:${type.width}px;height:${type.height}px;background-color:${type.color};border:${type.border};border-radius:3px;position:absolute;box-sizing:border-box`; e.addEventListener('animationend', () => e.classList.remove('spawning'), { once: true }); const hc=document.createElement('div'); hc.style.cssText="position:absolute;top:-10px;left:0;width:100%;height:4px;background-color:#555;overflow:hidden;border-radius:2px"; const hb=document.createElement('div'); hb.classList.add('barricade-health-bar'); hb.style.cssText="width:100%;height:100%;background-color:#00ff00;transition:width .1s"; hc.appendChild(hb); e.appendChild(hc); return e; }
    function generateGrassElements() { grassElementsContainer.innerHTML=''; for(let i=0;i<150;i++){ const e=document.createElement('div'); const s=Math.random()*8+4; const castleAreaWidth = gameMode === 'ai' ? 160 : 80; e.style.cssText=`position:absolute;width:${s}px;height:${s*(Math.random()*.8+1)}px;background-color:hsl(${Math.random()*20+90},${Math.random()*20+50}%,${Math.random()*10+30}%);border-radius:${Math.random()*50}% ${Math.random()*50}% ${Math.random()*50}% ${Math.random()*50}% / ${Math.random()*50}% ${Math.random()*50}% ${Math.random()*50}% ${Math.random()*50}%;opacity:${Math.random()*.4+.3};filter:blur(${Math.random()*2}px);z-index:1;left:${Math.random()*(gameContainer.offsetWidth-castleAreaWidth-150)+castleAreaWidth}px;top:${Math.random()*gameContainer.offsetHeight}px`; grassElementsContainer.appendChild(e); } }
    
    function createCustomModElement(modData) {
        if (spriteStatus.get(modData.id) === 'loaded') {
            const img = document.createElement('img');
            img.src = `${SPRITE_PATH}${modData.id}.png`;
            img.style.width = `${modData.width}px`;
            img.style.height = `${modData.height}px`;
            img.style.position = 'absolute';
            return img;
        }

        const container = document.createElement('div');
        container.classList.add('custom-mod-render');
        container.style.width = `${modData.width}px`;
        container.style.height = `${modData.height}px`;
        container.style.position = 'absolute';
        const gridW = modData.gridWidth || 16;
        const gridH = modData.gridHeight || 16;
        const pixelSizeW = modData.width / gridW;
        const pixelSizeH = modData.height / gridH;
        let boxShadows = [];
        modData.pixelData.forEach((color, index) => {
            if (color && color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)') {
                const x = (index % gridW) * pixelSizeW;
                const y = Math.floor(index / gridW) * pixelSizeH;
                boxShadows.push(`${x}px ${y}px 0 ${Math.max(pixelSizeW, pixelSizeH)}px ${color}`);
            }
        });
        if (boxShadows.length > 0) {
            const pixelDrawer = document.createElement('div');
            pixelDrawer.style.position = 'absolute';
            pixelDrawer.style.top = '0';
            pixelDrawer.style.left = '0';
            pixelDrawer.style.width = `${pixelSizeW}px`;
            pixelDrawer.style.height = `${pixelSizeH}px`;
            pixelDrawer.style.backgroundColor = 'transparent';
            pixelDrawer.style.boxShadow = boxShadows.join(',');
            container.appendChild(pixelDrawer);
        }
        return container;
    }

    // --- Funções de Modding ---
    function loadMods() { const storedMods = localStorage.getItem('castleDefenseMods'); if (storedMods) { try { allMods = JSON.parse(storedMods).filter(mod => mod && mod.id && mod.type && mod.name); } catch(e) { console.error("Erro ao carregar mods do localStorage, limpando...", e); allMods = []; localStorage.removeItem('castleDefenseMods'); } } else { allMods = []; } }
    function saveMods() { localStorage.setItem('castleDefenseMods', JSON.stringify(allMods)); }
    function renderModList() { modListContainer.innerHTML = ''; if (allMods.length === 0) { modListContainer.innerHTML = '<p style="text-align:center; font-size: 0.8em; color: #888;">Nenhum mod adicionado.</p>'; return; } allMods.forEach((mod, index) => { if (!mod || !mod.type) { console.warn('Ignorando mod inválido:', index, mod); return; } const item = document.createElement('div'); item.className = 'mod-list-item'; item.innerHTML = `<span class="mod-list-item-name">[${mod.type.charAt(0).toUpperCase()}] ${mod.name}</span><div class="mod-list-item-controls"><button class="mod-button info mod-publish-btn" style="padding: 4px 8px; font-size: 0.6em;" data-index="${index}">Publicar</button><label class="mod-toggle"><input type="checkbox" class="mod-toggle-check" data-index="${index}" ${mod.active ? 'checked' : ''}><span class="mod-toggle-slider"></span></label><button class="mod-button danger mod-delete-btn" data-index="${index}">X</button></div>`; modListContainer.appendChild(item); }); }
    
    function loadModpacks() { const stored = localStorage.getItem('castleDefenseModpacks'); if (stored) { try { allModpacks = JSON.parse(stored); } catch (e) { console.error("Erro ao carregar modpacks:", e); allModpacks = []; localStorage.removeItem('castleDefenseModpacks'); } } else { allModpacks = []; } }
    function saveModpacks() { localStorage.setItem('castleDefenseModpacks', JSON.stringify(allModpacks)); }

    function renderModpackList() {
        modpackListContainer.innerHTML = '';
        if (allModpacks.length === 0) {
            modpackListContainer.innerHTML = '<p style="text-align:center; font-size: 0.8em; color: #888;">Nenhum modpack criado. Clique em "Criar Novo Modpack" abaixo!</p>';
            return;
        }
        allModpacks.forEach((pack, index) => {
            const item = document.createElement('div');
            item.className = 'modpack-list-item';
            const modCount = pack.mods ? pack.mods.length : 0;
            const deleteButtonHTML = pack.isDefault 
                ? '' 
                : `<button class="mod-button danger modpack-delete-btn" data-index="${index}">X</button>`;
            
            item.innerHTML = `
                <span class="mod-list-item-name">${pack.name} (${modCount} mods)</span>
                <div class="mod-list-item-controls">
                    <button class="mod-button info modpack-publish-btn" data-index="${index}" style="font-size: 0.7em;">Publicar</button>
                    <button class="mod-button secondary modpack-edit-btn" data-index="${index}" style="font-size: 0.7em;">Editar</button>
                    <label class="mod-toggle">
                        <input type="checkbox" class="modpack-toggle-check" data-index="${index}" ${pack.active ? 'checked' : ''}>
                        <span class="mod-toggle-slider"></span>
                    </label>
                    ${deleteButtonHTML}
                </div>`;
            modpackListContainer.appendChild(item);
        });
    }

    async function openModpackEditor(packIndex = null) {
        currentModpackEditing = packIndex;
        modpackEditorOverlay.style.display = 'flex';
        addModsToPackList.innerHTML = '<p style="text-align:center; color: #888;">Buscando mods locais e do Hub...</p>';

        try {
            const onlineModsRaw = await fetchOnlineMods();
            const onlineModsDecoded = onlineModsRaw.map(onlineMod => {
                try {
                    return JSON.parse(atob(onlineMod.modCode));
                } catch (e) {
                    console.warn(`Falha ao decodificar o mod online: ${onlineMod.name}`, e);
                    return null;
                }
            }).filter(Boolean);

            const modMap = new Map();
            allMods.forEach(mod => modMap.set(mod.id, mod));
            onlineModsDecoded.forEach(mod => {
                if (!modMap.has(mod.id)) {
                    mod.isFromHub = true;
                    modMap.set(mod.id, mod);
                }
            });

            const allAvailableMods = Array.from(modMap.values()).sort((a, b) => a.name.localeCompare(b.name));
            
            let existingModIds = [];

            if (packIndex !== null) {
                const pack = allModpacks[packIndex];
                modpackEditorTitle.textContent = "Editar Modpack";
                modpackNameInput.value = pack.name;
                existingModIds = pack.mods || [];
            } else {
                modpackEditorTitle.textContent = "Criar Novo Modpack";
                modpackNameInput.value = "";
            }

            addModsToPackList.innerHTML = '';
            if (allAvailableMods.length === 0) {
                addModsToPackList.innerHTML = '<p style="text-align:center; color: #888;">Nenhum mod local ou do hub para adicionar.</p>';
                return;
            }
            
            allAvailableMods.forEach(mod => {
                const isChecked = existingModIds.includes(mod.id);
                const item = document.createElement('div');
                item.className = 'add-mod-to-pack-item';
                const hubIndicator = mod.isFromHub ? '<span class="mod-hub-indicator">[Hub]</span> ' : '';
                item.innerHTML = `
                    <input type="checkbox" id="add-mod-${mod.id}" data-mod-id="${mod.id}" ${isChecked ? 'checked' : ''}>
                    <label for="add-mod-${mod.id}">${hubIndicator}[${mod.type.charAt(0).toUpperCase()}] ${mod.name}</label>
                `;
                addModsToPackList.appendChild(item);
            });

        } catch (error) {
            console.error("Erro ao carregar mods para o editor:", error);
            addModsToPackList.innerHTML = '<p style="text-align:center; color: #ff6b6b;">Não foi possível carregar os mods do Hub. Tente novamente.</p>';
        }
    }

    function saveModpack() {
        const name = modpackNameInput.value.trim();
        if (!name) {
            showCustomAlert("O modpack precisa de um nome.");
            return;
        }
        const selectedModIds = Array.from(addModsToPackList.querySelectorAll('input:checked'))
                                   .map(input => input.dataset.modId);

        if (currentModpackEditing !== null) {
            allModpacks[currentModpackEditing].name = name;
            allModpacks[currentModpackEditing].mods = selectedModIds;
        } else {
            const newPack = {
                id: `pack_${Date.now()}`,
                name: name,
                mods: selectedModIds,
                active: true
            };
            allModpacks.push(newPack);
        }
        
        saveModpacks();
        renderModpackList();
        modpackEditorOverlay.style.display = 'none';
        currentModpackEditing = null;
    }

    function switchModManagerTab(tabName) {
        currentModTab = tabName;
        document.querySelectorAll('#mod-screen .editor-tab').forEach(tab => tab.classList.remove('active'));
        document.getElementById(`mod-tab-${tabName}`).classList.add('active');
        document.querySelectorAll('.mod-tab-content').forEach(content => content.classList.remove('active'));
        if (tabName === 'local') {
            localModsContent.classList.add('active');
            createNewButton.textContent = "Criar Novo Mod";
        } else {
            modpacksContent.classList.add('active');
            createNewButton.textContent = "Criar Novo Modpack";
        }
    }

    function rebuildPixelGrid(width, height) { editorGridSize.width = width; editorGridSize.height = height; pixelGrid.innerHTML = ''; pixelGrid.style.setProperty('--grid-width', width); pixelGrid.style.setProperty('--grid-height', height); for (let i = 0; i < width * height; i++) { const pixel = document.createElement('div'); pixel.className = 'pixel'; pixel.style.backgroundColor = 'transparent'; pixelGrid.appendChild(pixel); } }
    function initializeModEditor() { rebuildPixelGrid(16, 16); colorPalette.innerHTML = ''; editorPaletteColors.forEach(color => { const colorBox = document.createElement('div'); colorBox.className = 'color-box'; colorBox.style.backgroundColor = color === 'transparent' ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACdJREFUOE9jZGBgEGHAD97/p0+f/v//PxMDw585858ZGBgY/j98+PA/AAAU4gH4Y0Y1iAAAAABJRU5ErkJggg==")' : color; colorBox.dataset.color = color; if (color === editorCurrentColor) colorBox.classList.add('selected'); colorPalette.appendChild(colorBox); }); waveMonsterList.innerHTML = ''; switchEditorTab('monster'); }
    function switchEditorTab(type) { editorCurrentType = type; document.querySelectorAll('#mod-editor-screen .editor-tab').forEach(t => t.classList.remove('active')); document.querySelector(`#mod-editor-screen .editor-tab[data-type="${type}"]`).classList.add('active'); document.querySelectorAll('.editor-panel-for-type').forEach(p => p.classList.remove('active')); if (type === 'wave') { waveEditorPanel.classList.add('active'); } else { pixelEditorPanel.classList.add('active'); } let inputsHTML = `<div class="stat-input-group"><label for="mod-name">Nome:</label><input type="text" id="mod-name" value="Meu ${type}"></div>`; if (type === 'monster' || type === 'guardian' || type === 'barricade') { inputsHTML += `<div class="stat-input-group"><label>Resolução do Desenho:</label><div class="grid-size-inputs"><input type="number" id="mod-grid-width" value="16" min="4" max="64"><span>x</span><input type="number" id="mod-grid-height" value="16" min="4" max="64"><button id="apply-grid-size-btn" class="mod-button secondary" style="padding: 4px 8px; font-size: 0.8em;">OK</button></div></div><div class="stat-input-group"><label for="mod-width">Largura (px):</label><input type="number" id="mod-width" value="40"></div><div class="stat-input-group"><label for="mod-height">Altura (px):</label><input type="number" id="mod-height" value="40"></div>`; } if (type === 'monster') { inputsHTML += `<div class="stat-input-group"><label for="mod-health">Vida:</label><input type="number" id="mod-health" value="25"></div><div class="stat-input-group"><label for="mod-damage">Dano (corpo a corpo):</label><input type="number" id="mod-damage" value="2"></div><div class="stat-input-group"><label for="mod-speed">Velocidade:</label><input type="number" id="mod-speed" step="0.1" value="1.0"></div><div class="stat-input-group"><label for="mod-money">Dinheiro (drop):</label><input type="number" id="mod-money" value="10"></div><div class="stat-input-group"><label for="mod-spawnWaves">Aparece nas Ondas (ex: 5,10,15):</label><input type="text" id="mod-spawnWaves" placeholder="5, 10, 15" value="1"></div><div class="stat-input-group"><label for="mod-spawnCount">Quantidade (em cada onda):</label><input type="number" id="mod-spawnCount" value="3"></div><div class="stat-input-group"><label for="mod-isFlying">É Voador:</label><select id="mod-isFlying"><option value="false">Não</option><option value="true">Sim</option></select></div>`; } else if (type === 'guardian') { inputsHTML += `<div class="stat-input-group"><label for="mod-cost">Custo (Dinheiro):</label><input type="number" id="mod-cost" value="100"></div><div class="stat-input-group"><label for="mod-damage">Dano:</label><input type="number" id="mod-damage" value="10"></div><div class="stat-input-group"><label for="mod-cooldown">Cooldown (ms):</label><input type="number" id="mod-cooldown" value="1500"></div><div class="stat-input-group"><label for="mod-range">Alcance (px):</label><input type="number" id="mod-range" value="300"></div><div class="stat-input-group"><label for="mod-projectileSpeed">Vel. Projétil:</label><input type="number" id="mod-projectileSpeed" value="8"></div><div class="stat-input-group"><label for="mod-projectileSize">Tam. Projétil (px):</label><input type="number" id="mod-projectileSize" value="10"></div><div class="stat-input-group"><label for="mod-projectileColor">Cor Projétil:</label><input type="color" id="mod-projectileColor" value="#ffff00"></div>`; } else if (type === 'barricade') { inputsHTML += `<div class="stat-input-group"><label for="mod-cost">Custo (Dinheiro):</label><input type="number" id="mod-cost" value="50"></div><div class="stat-input-group"><label for="mod-health">Vida:</label><input type="number" id="mod-health" value="50"></div>`; } else if (type === 'wave') { inputsHTML += `<div class="stat-input-group"><label for="mod-waveNumber">Número da Onda:</label><input type="number" id="mod-waveNumber" value="1"></div>`; } statInputsContainer.innerHTML = inputsHTML; if (document.getElementById('apply-grid-size-btn')) { document.getElementById('apply-grid-size-btn').addEventListener('click', () => { const w = parseInt(document.getElementById('mod-grid-width').value); const h = parseInt(document.getElementById('mod-grid-height').value); if (w > 0 && h > 0) { rebuildPixelGrid(w, h); } }); } }
    function populateMonsterDropdown(selectElement) { selectElement.innerHTML = ''; baseMonsterTypes.forEach(m => { const option = document.createElement('option'); option.value = m.id; option.textContent = `(Base) ${m.name}`; selectElement.appendChild(option); }); allMods.filter(m => m.type === 'monster').forEach(m => { const option = document.createElement('option'); option.value = m.id; option.textContent = `(Mod) ${m.name}`; selectElement.appendChild(option); }); }
    
    // --- Funções do Hub Online ---
    async function showCustomModal(message, type = 'alert', defaultValue = '') { return new Promise(resolve => { customModalMessage.textContent = message; customModalActions.innerHTML = ''; if (type === 'prompt') { customModalInput.style.display = 'block'; customModalInput.value = defaultValue; } else { customModalInput.style.display = 'none'; } if (type === 'confirm' || type === 'prompt') { const confirmBtn = document.createElement('button'); confirmBtn.textContent = (type === 'confirm') ? 'Sim' : 'OK'; confirmBtn.className = 'main-menu-button'; confirmBtn.style.backgroundColor = '#28a745'; confirmBtn.style.fontSize = '0.8em'; confirmBtn.style.padding = '10px 20px'; const cancelBtn = document.createElement('button'); cancelBtn.textContent = (type === 'confirm') ? 'Não' : 'Cancelar'; cancelBtn.className = 'main-menu-button'; cancelBtn.style.backgroundColor = '#dc3545'; cancelBtn.style.fontSize = '0.8em'; cancelBtn.style.padding = '10px 20px'; confirmBtn.onclick = () => { customModalOverlay.style.display = 'none'; resolve(type === 'prompt' ? customModalInput.value : true); }; cancelBtn.onclick = () => { customModalOverlay.style.display = 'none'; resolve(type === 'prompt' ? null : false); }; customModalActions.appendChild(cancelBtn); customModalActions.appendChild(confirmBtn); } else { const okBtn = document.createElement('button'); okBtn.textContent = 'OK'; okBtn.className = 'main-menu-button'; okBtn.style.backgroundColor = '#007bff'; okBtn.style.fontSize = '0.8em'; okBtn.style.padding = '10px 20px'; okBtn.onclick = () => { customModalOverlay.style.display = 'none'; resolve(true); }; customModalActions.appendChild(okBtn); } customModalOverlay.style.display = 'flex'; if (type === 'prompt') customModalInput.focus(); }); }
    async function showCustomAlert(message) { return showCustomModal(message, 'alert'); }
    async function showCustomConfirm(message) { return showCustomModal(message, 'confirm'); }
    async function showCustomPrompt(message, defaultValue = '') { return showCustomModal(message, 'prompt', defaultValue); }
    
    async function fetchOnlineMods() { try { const response = await fetch(`${JSONBIN_URL}/latest`, { headers: { 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Meta': 'false' } }); if (response.status === 404) return []; if (!response.ok) throw new Error(`Erro: ${response.statusText}`); const data = await response.json(); return Array.isArray(data) ? data : []; } catch (error) { console.error("Falha ao carregar mods:", error); return []; } }
    async function fetchOnlineModpacks() { try { const response = await fetch(`${MODPACK_JSONBIN_URL}/latest`, { headers: { 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Meta': 'false' } }); if (response.status === 404) return []; if (!response.ok) throw new Error(`Erro: ${response.statusText}`); const data = await response.json(); return Array.isArray(data) ? data : []; } catch (error) { console.error("Falha ao carregar modpacks:", error); return []; } }

    async function renderOnlineHub() {
        const isModsTab = document.getElementById('hub-tab-mods').classList.contains('active');
        onlineModList.innerHTML = '<p>Carregando...</p>';
        let itemsToDisplay = [];
        if (isModsTab) {
            itemsToDisplay = await fetchOnlineMods();
        } else {
            itemsToDisplay = await fetchOnlineModpacks();
        }
        const searchTerm = onlineModSearch.value.toLowerCase();
        if (searchTerm) {
            itemsToDisplay = itemsToDisplay.filter(item => item.name.toLowerCase().includes(searchTerm));
        }
        itemsToDisplay.sort((a, b) => {
            const sortMethod = onlineModSort.value;
            switch (sortMethod) {
                case 'usage_desc': return (b.usageCount || 0) - (a.usageCount || 0);
                case 'name_asc': return a.name.localeCompare(b.name);
                case 'date_desc': default: return (b.publishDate || 0) - (a.publishDate || 0);
            }
        });
        onlineModList.innerHTML = '';
        if (itemsToDisplay.length === 0) {
            onlineModList.innerHTML = `<p>Nenhum ${isModsTab ? 'mod' : 'modpack'} encontrado.</p>`;
            return;
        }
        itemsToDisplay.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'online-mod-item';
            if (isModsTab) {
                 itemElement.innerHTML = `<div class="online-mod-header"><span class="online-mod-name">${item.name}</span><span class="online-mod-type">${item.type.charAt(0).toUpperCase()}</span></div><div class="online-mod-info"><span>por: ${item.author || 'Anônimo'}</span><span>usado: ${item.usageCount || 0}x</span></div><div class="online-mod-actions"><button class="mod-button secondary online-mod-add-btn" data-mod-id="${item.id}" data-code="${item.modCode}">Adicionar</button><button class="mod-button info online-mod-copy-btn" data-code="${item.modCode}">Copiar</button><button class="mod-button action online-mod-edit-btn" data-code="${item.modCode}" data-name="${item.name}">Editar</button><button class="mod-button danger online-mod-delete-btn" data-mod-id="${item.id}">Excluir</button></div>`;
            } else {
                itemElement.innerHTML = `<div class="online-mod-header"><span class="online-mod-name">${item.name}</span><span class="online-mod-type">PACK</span></div><div class="online-mod-info"><span>por: ${item.author || 'Anônimo'}</span><span>${item.mods.length} mods</span></div><div class="online-mod-actions"><button class="mod-button secondary online-pack-add-btn" data-pack-id="${item.id}">Adicionar Pack</button></div>`;
            }
            onlineModList.appendChild(itemElement);
        });
    }

    async function publishMod(index) {
        const modToPublish = allMods[index];
        if (!modToPublish) return;
        const authorName = (currentUser ? currentUser.username : await showCustomPrompt("Digite seu nome de autor:", "Anônimo"));
        if (!authorName) return;
        try {
            let onlineMods = await fetchOnlineMods();
            const modCode = btoa(JSON.stringify(modToPublish));
            const newOnlineMod = { id: `online_mod_${Date.now()}`, name: modToPublish.name, type: modToPublish.type, author: authorName, publishDate: Date.now(), usageCount: 0, modCode };
            onlineMods.unshift(newOnlineMod);
            const response = await fetch(JSONBIN_URL, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Versioning': 'false' }, body: JSON.stringify(onlineMods) });
            if (!response.ok) throw new Error(`Erro ao publicar: ${response.statusText}`);
            await showCustomAlert(`Mod "${modToPublish.name}" publicado!`);
            if (document.getElementById('hub-tab-mods').classList.contains('active')) renderOnlineHub();
        } catch (error) { console.error("Falha ao publicar mod:", error); await showCustomAlert("Erro ao publicar o mod."); }
    }

    async function publishModpack(index) {
        const packToPublish = allModpacks[index];
        if (!packToPublish) return;
        if (!packToPublish.mods || packToPublish.mods.length === 0) {
            return showCustomAlert("Não é possível publicar um modpack vazio.");
        }
        const authorName = (currentUser ? currentUser.username : await showCustomPrompt("Digite seu nome de autor:", "Anônimo"));
        if (!authorName) return;
        try {
            let onlinePacks = await fetchOnlineModpacks();
            const newOnlinePack = { ...packToPublish, id: `online_pack_${Date.now()}`, author: authorName, publishDate: Date.now() };
            onlinePacks.unshift(newOnlinePack);
            const response = await fetch(MODPACK_JSONBIN_URL, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Versioning': 'false' }, body: JSON.stringify(onlinePacks) });
            if (!response.ok) throw new Error(`Erro ao publicar: ${response.statusText}`);
            await showCustomAlert(`Modpack "${packToPublish.name}" publicado!`);
            if (document.getElementById('hub-tab-packs').classList.contains('active')) renderOnlineHub();
        } catch (error) { console.error("Falha ao publicar modpack:", error); await showCustomAlert(`Erro ao publicar o modpack: ${error.message}`); }
    }

    async function handleAddOnlineModpack(packId) {
        try {
            const onlinePacks = await fetchOnlineModpacks();
            const packToAdd = onlinePacks.find(p => p.id === packId);
            if (!packToAdd) throw new Error("Modpack não encontrado no hub.");
            if (allModpacks.some(p => p.id === packToAdd.id)) {
                await showCustomAlert(`O modpack "${packToAdd.name}" já está na sua lista.`);
                return;
            }
            allModpacks.push(packToAdd);
            saveModpacks();
            renderModpackList();
            await showCustomAlert(`Modpack "${packToAdd.name}" adicionado com sucesso!`);
        } catch(error) {
            await showCustomAlert(`Erro ao adicionar modpack: ${error.message}`);
        }
    }

    async function incrementModUsageCount(modId) { try { let onlineMods = await fetchOnlineMods(); const modIndex = onlineMods.findIndex(m => m.id === modId); if (modIndex > -1) { onlineMods[modIndex].usageCount = (onlineMods[modIndex].usageCount || 0) + 1; await fetch(JSONBIN_URL, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Versioning': 'false' }, body: JSON.stringify(onlineMods) }); renderOnlineHub(); } } catch (error) { console.error("Falha ao atualizar uso:", error); } }
    
    async function editOnlineMod(code, originalName) {
        try {
            const jsonString = atob(code);
            let modData = JSON.parse(jsonString);
            modScreen.style.display = 'none';
            modEditorScreen.style.display = 'flex';
            initializeModEditor();
            let newName = `${originalName}_edit1`;
            let editCount = 1;
            while (allMods.some(m => m.name === newName)) {
                editCount++;
                newName = `${originalName}_edit${editCount}`;
            }
            switchEditorTab(modData.type);
            document.getElementById('mod-name').value = newName;
            if (modData.type !== 'wave') {
                rebuildPixelGrid(modData.gridWidth || 16, modData.gridHeight || 16);
                document.querySelectorAll('#pixel-grid .pixel').forEach((p, i) => {
                    p.style.backgroundColor = modData.pixelData[i] || 'transparent';
                });
                document.getElementById('mod-grid-width').value = modData.gridWidth || 16;
                document.getElementById('mod-grid-height').value = modData.gridHeight || 16;
                document.getElementById('mod-width').value = modData.width;
                document.getElementById('mod-height').value = modData.height;
            }
            if (modData.type === 'monster') {
                document.getElementById('mod-health').value = modData.health;
                document.getElementById('mod-damage').value = modData.damage;
                document.getElementById('mod-speed').value = modData.speed;
                document.getElementById('mod-money').value = modData.money;
                document.getElementById('mod-spawnWaves').value = modData.spawnWaves.join(',');
                document.getElementById('mod-spawnCount').value = modData.spawnCount;
                document.getElementById('mod-isFlying').value = modData.isFlying;
            }
            await showCustomAlert(`Editando cópia de "${originalName}". Salvo como "${newName}".`);
        } catch (error) {
            await showCustomAlert("Não foi possível carregar para edição.");
            console.error(error);
        }
    }
    
    async function deleteOnlineModFromServer(modIdToDelete) {
        try {
            let onlineMods = await fetchOnlineMods();
            const updatedMods = onlineMods.filter(mod => mod.id !== modIdToDelete);
            const response = await fetch(JSONBIN_URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Versioning': 'false' },
                body: JSON.stringify(updatedMods)
            });
            if (!response.ok) {
                throw new Error(`Erro ao atualizar o bin: ${response.statusText}`);
            }
            return true;
        } catch (error) {
            console.error("Falha ao excluir mod do servidor:", error);
            return false;
        }
    }
    
    async function handleDeleteOnlineMod(modId) {
        const password = await showCustomPrompt("Digite a senha de administrador para excluir o mod:", "");
        if (password === null) return;
        if (password === '123456') {
            const success = await deleteOnlineModFromServer(modId);
            if (success) {
                await showCustomAlert("Mod excluído com sucesso da biblioteca online.");
                renderOnlineHub();
            } else {
                await showCustomAlert("Ocorreu um erro ao tentar excluir o mod.");
            }
        } else {
            await showCustomAlert("Senha incorreta. A exclusão foi cancelada.");
        }
    }

    async function fetchSocialData() { try { const response = await fetch(`${SOCIAL_JSONBIN_URL}/latest`, { headers: { 'X-Master-Key': SOCIAL_JSONBIN_API_KEY } }); if (response.status === 404) return {}; if (!response.ok) throw new Error(`Erro de rede: ${response.statusText}`); const data = await response.json(); const record = data.record || {}; if (!record.conversations) record.conversations = {}; if (!record.groups) record.groups = {}; return record; } catch (error) { console.error("Falha ao buscar dados sociais:", error); showCustomAlert("Erro de conexão com o servidor. Tente mais tarde."); return null; } }
    async function updateSocialData(newData) { try { const response = await fetch(SOCIAL_JSONBIN_URL, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': SOCIAL_JSONBIN_API_KEY, 'X-Bin-Versioning': 'false' }, body: JSON.stringify(newData) }); if (!response.ok) throw new Error(`Erro de rede: ${response.statusText}`); return true; } catch (error) { console.error("Falha ao atualizar dados sociais:", error); showCustomAlert("Erro de conexão, suas alterações podem não ter sido salvas."); return false; } }
    function updateUiForLogin() { 
    if (currentUser) { 
        socialProfileButton.textContent = currentUser.username.charAt(0).toUpperCase(); 
        trophyCounter.style.display = 'flex'; 
        trophyValue.textContent = Math.floor(currentUser.stats.trophies); 
        multiplayerButton.classList.remove('disabled'); 
        
        // --- ADICIONE ESTA PARTE ---
        // Verifica se o jogador tem troféus suficientes para ver a Mina e a Loja do Bob
        if (currentUser.stats.trophies >= 50) {
            bobsMineButton.style.display = 'block'; // Mostra o botão da Mina
            bobsShopButton.style.display = 'block'; // Mostra o botão da Loja
        } else {
            bobsMineButton.style.display = 'none'; // Esconde se não tiver troféus
            bobsShopButton.style.display = 'none';
        }
        // --- FIM DA PARTE ADICIONADA ---

    } else { 
        socialProfileButton.textContent = '👤'; 
        trophyCounter.style.display = 'none'; 
        multiplayerButton.classList.add('disabled'); 
        
        // Esconde os botões se o jogador estiver deslogado
        bobsMineButton.style.display = 'none';
        bobsShopButton.style.display = 'none';
    } 
    checkTrophyUnlocks(); // Esta função já existe e agora vai funcionar
}
    async function handleLogin(username, password) { 
        const socialData = await fetchSocialData(); 
        if (!socialData) return; 
        const user = socialData[username.toLowerCase()]; 
        if (user && user.password === password) { 
            currentUser = { username: username, ...user }; 
            bobs = currentUser.bobs || 0;
            localStorage.setItem('castleDefenseUser', JSON.stringify({ username, password })); 
            updateUiForLogin(); 
            socialOverlay.style.display = 'none'; 
            await showCustomAlert(`Bem-vindo de volta, ${username}!`); 
            startSocialPoll(); 
        } else { 
            await showCustomAlert("Nome de usuário ou senha incorretos."); 
        } 
    }
    async function handleCreateAccount(username, password) { 
        if (username.length < 3 || password.length < 4) { 
            await showCustomAlert("Usuário deve ter no mínimo 3 caracteres e senha no mínimo 4."); 
            return; 
        } 
        const socialData = await fetchSocialData(); 
        if (!socialData) return; 
        if (socialData[username.toLowerCase()]) { 
            await showCustomAlert("Este nome de usuário já existe."); 
            return; 
        } 
        socialData[username.toLowerCase()] = { 
            password: password, 
            friends: [], 
            friendRequests: [], 
            groupInvites: [], 
            stats: { totalMoney: 0, totalDiamonds: 0, totalWaves: 0, gamesPlayed: 0, trophies: 0 },
            mineData: { level: 1, lastCollectedTimestamp: Date.now() },
            spellInventory: {}
        }; 
        const success = await updateSocialData(socialData); 
        if (success) { 
            await showCustomAlert("Conta criada com sucesso! Agora você pode logar."); 
            toggleAuthMode(true); 
        } 
    }
    function handleLogout() { currentUser = null; localStorage.removeItem('castleDefenseUser'); updateUiForLogin(); socialOverlay.style.display = 'none'; stopSocialPoll(); }
    function toggleAuthMode(forceLogin) { isAuthPanelInLoginMode = forceLogin !== undefined ? forceLogin : !isAuthPanelInLoginMode; if (isAuthPanelInLoginMode) { authTitle.textContent = "Logar na Conta"; authSubmitButton.textContent = "Logar"; authToggleLink.textContent = "Não tem uma conta? Crie uma agora"; } else { authTitle.textContent = "Criar Conta"; authSubmitButton.textContent = "Criar Conta"; authToggleLink.textContent = "Já tem uma conta? Clique para logar"; } authUsernameInput.value = ''; authPasswordInput.value = ''; }
    async function renderFriendsPanel() { friendsPanelTitle.textContent = `Amigos de ${currentUser.username}`; friendsListContainer.innerHTML = '<p>Carregando amigos...</p>'; const socialData = await fetchSocialData(); if (!socialData || !currentUser) { friendsListContainer.innerHTML = '<p style="color: #f44336;">Erro ao carregar dados.</p>'; return; } const myData = socialData[currentUser.username.toLowerCase()]; if (!myData || !myData.friends || myData.friends.length === 0) { friendsListContainer.innerHTML = '<p>Você ainda não tem amigos.</p>'; return; } friendsListContainer.innerHTML = ''; myData.friends.forEach(friendName => { const friendData = socialData[friendName.toLowerCase()]; const trophies = friendData ? Math.floor(friendData.stats.trophies) : '???'; const item = document.createElement('div'); item.className = 'friend-item'; item.innerHTML = `<div class="friend-info"><span>${friendName}</span> - <span class="trophy-icon">🏆</span><span>${trophies}</span></div><div class="friend-actions"><button class="mod-button secondary message-friend-btn" data-friend-name="${friendName}">✉️</button><button class="mod-button danger remove-friend-btn" data-friend-name="${friendName}">❌</button></div>`; friendsListContainer.appendChild(item); }); }
    async function handleSendFriendRequest() { const targetUsername = addFriendUsernameInput.value.trim(); if (!targetUsername || targetUsername.toLowerCase() === currentUser.username.toLowerCase()) { await showCustomAlert("Nome de usuário inválido."); return; } const socialData = await fetchSocialData(); if (!socialData) return; const targetUser = socialData[targetUsername.toLowerCase()]; if (!targetUser) { await showCustomAlert("Usuário não encontrado."); return; } if (targetUser.friends.includes(currentUser.username) || targetUser.friendRequests.includes(currentUser.username)) { await showCustomAlert("Você já é amigo ou já enviou uma solicitação."); return; } targetUser.friendRequests.push(currentUser.username); const success = await updateSocialData(socialData); if (success) { await showCustomAlert(`Solicitação de amizade enviada para ${targetUsername}.`); addFriendUsernameInput.value = ''; } }
    async function handleFriendRequestResponse(senderUsername, accept) { const socialData = await fetchSocialData(); if (!socialData) return; const myData = socialData[currentUser.username.toLowerCase()]; const senderData = socialData[senderUsername.toLowerCase()]; if (!myData || !senderData) return; myData.friendRequests = myData.friendRequests.filter(u => u.toLowerCase() !== senderUsername.toLowerCase()); if (accept) { myData.friends.push(senderUsername); senderData.friends.push(currentUser.username); } const success = await updateSocialData(socialData); if (success && accept) { await showCustomAlert(`Você e ${senderUsername} agora são amigos!`); if (friendsPanel.style.display === 'block') renderFriendsPanel(); } hideInteractiveNotification(); checkForNotifications(); }
    async function handleRemoveFriend(friendUsername) { const wantsToRemove = await showCustomConfirm(`Deseja remover ${friendUsername} da sua lista de amigos?`); if (!wantsToRemove) return; const socialData = await fetchSocialData(); if (!socialData) return; const myData = socialData[currentUser.username.toLowerCase()]; const friendData = socialData[friendUsername.toLowerCase()]; if (myData) { myData.friends = myData.friends.filter(f => f.toLowerCase() !== friendUsername.toLowerCase()); } if (friendData) { friendData.friends = friendData.friends.filter(f => f.toLowerCase() !== currentUser.username.toLowerCase()); } const success = await updateSocialData(socialData); if (success) { await showCustomAlert(`${friendUsername} foi removido.`); renderFriendsPanel(); } }
    function showInteractiveNotification(text, type, data) { hideInteractiveNotification(); currentNotification = { type, data }; interactiveNotificationText.textContent = text; interactiveNotification.style.display = 'flex'; }
    function hideInteractiveNotification() { currentNotification = null; interactiveNotification.style.display = 'none'; }
    async function checkForNotifications() { if (!currentUser || currentNotification) return; const socialData = await fetchSocialData(); if (!socialData) return; const myData = socialData[currentUser.username.toLowerCase()]; if (!myData) return; if (myData.friendRequests && myData.friendRequests.length > 0) { const sender = myData.friendRequests[0]; showInteractiveNotification(`${sender} enviou um pedido de amizade!`, 'friendRequest', sender); return; } if (myData.groupInvites && myData.groupInvites.length > 0) { const { groupName, sender } = myData.groupInvites[0]; showInteractiveNotification(`${sender} te convidou para o grupo "${groupName}"!`, 'groupInvite', myData.groupInvites[0]); return; } }
    function startSocialPoll() { if (socialPollInterval) clearInterval(socialPollInterval); checkForNotifications(); socialPollInterval = setInterval(checkForNotifications, 10000); }
    function stopSocialPoll() { if (socialPollInterval) clearInterval(socialPollInterval); socialPollInterval = null; }
    
    async function updatePlayerStatsAndTrophies() {
        if (!currentUser || isGodMode || isDebugModeEnabled) return { trophiesGained: 0, newTotalTrophies: currentUser ? currentUser.stats.trophies : 0 };
        const socialData = await fetchSocialData();
        if (!socialData) return { trophiesGained: 0, newTotalTrophies: currentUser.stats.trophies };
        const myData = socialData[currentUser.username.toLowerCase()];
        if (!myData) return { trophiesGained: 0, newTotalTrophies: currentUser.stats.trophies };
    
        const oldTrophies = myData.stats.trophies || 0;
        myData.stats.gamesPlayed = (myData.stats.gamesPlayed || 0) + 1;
        myData.stats.totalMoney = (myData.stats.totalMoney || 0) + money;
        myData.stats.totalDiamonds = (myData.stats.totalDiamonds || 0) + diamonds;
        myData.stats.totalWaves = (myData.stats.totalWaves || 0) + currentWave;
    
        let newTrophies = oldTrophies;
        if (myData.stats.gamesPlayed > 0) {
            const avgMoney = myData.stats.totalMoney / myData.stats.gamesPlayed;
            const avgDiamonds = myData.stats.totalDiamonds / myData.stats.gamesPlayed;
            const avgWaves = myData.stats.totalWaves / myData.stats.gamesPlayed;
            newTrophies = Math.floor((avgMoney / 10) + (avgDiamonds * 5) + (avgWaves * 2));
        }
        
        myData.stats.trophies = newTrophies;
        currentUser.stats = myData.stats;
        await updateSocialData(socialData);
        updateUiForLogin();
        checkTrophyUnlocks();
        return { trophiesGained: newTrophies - oldTrophies, newTotalTrophies: newTrophies };
    }

// --- Função de Troféus ---

// Verifica os troféus do jogador para desbloquear recompensas (função de exemplo)
function checkTrophyUnlocks() {
    if (!currentUser) return;

    const trophies = Math.floor(currentUser.stats.trophies);

    // Exemplo: Desbloqueia algo com 100 troféus
    if (trophies >= 100) {
        // Você poderia adicionar uma classe a um elemento, mostrar um ícone, etc.
        // Ex: socialProfileButton.classList.add('veteran-player');
    }
    // Adicione mais verificações aqui para outras recompensas
}```

---

#### **Bloco 3: Lógica Principal da IA**

Este é o bloco mais importante. Ele corrige o erro `runAILogic is not defined` e restaura completamente o comportamento da IA, fazendo-a comprar guardiões, evoluí-los e melhorar o castelo.

```javascript
// --- Lógica da Inteligência Artificial ---

function runAILogic() {
    if (isPaused || isGameOver || isCastleAIDestroyed) return;

    // Prioridade 1: Comprar guardiões se tiver slots vazios
    const emptySlotIndex = guardianSlotsAI.findIndex(slot => slot === null);
    if (emptySlotIndex !== -1) {
        const affordableGuardians = Object.keys(activeGameGuardianTypes).filter(id => {
            const type = activeGameGuardianTypes[id];
            return money >= type.evolutions[0].cost;
        });

        if (affordableGuardians.length > 0) {
            const randomGuardianId = affordableGuardians[Math.floor(Math.random() * affordableGuardians.length)];
            const type = activeGameGuardianTypes[randomGuardianId];
            
            money -= type.evolutions[0].cost;
            const newGuardian = { typeId: randomGuardianId, level: 1, lastAttackTime: 0 };
            
            // Tenta colocar no inventário da IA (se houvesse um), por agora coloca direto no slot
             guardianSlotsAI[emptySlotIndex] = newGuardian;

            addChatMessage("IA", `Contratei um ${type.name}!`, true);
            updateMoneyDisplay();
            updateGuardianVisuals(); // Atualiza os guardiões na tela
            return; // Termina a ação da IA por este ciclo
        }
    }

    // Prioridade 2: Evoluir um guardião aleatório que não esteja no nível máximo
    const evolvableGuardians = guardianSlotsAI.map((g, index) => ({ guardian: g, index: index }))
        .filter(item => {
            if (!item.guardian) return false;
            const type = activeGameGuardianTypes[item.guardian.typeId];
            if (type.isCustom || item.guardian.level >= type.evolutions.length) return false; // Nível máximo
            const nextEvoCost = type.evolutions[item.guardian.level].cost;
            return money >= nextEvoCost;
        });

    if (evolvableGuardians.length > 0) {
        const toEvolve = evolvableGuardians[Math.floor(Math.random() * evolvableGuardians.length)];
        const guardian = toEvolve.guardian;
        const type = activeGameGuardianTypes[guardian.typeId];
        const cost = type.evolutions[guardian.level].cost;

        money -= cost;
        guardian.level++;
        addChatMessage("IA", `Meu ${type.name} está mais forte!`, true);
        updateMoneyDisplay();
        return;
    }

    // Prioridade 3: Melhorar o castelo
    const castlePath = castles[currentCastleTypeAI];
    if (currentCastleEvolutionAI < castlePath.length - 1) {
        const nextLevel = castlePath[currentCastleEvolutionAI + 1];
        if (money >= nextLevel.cost) {
            evolveCurrentCastle(true); // O 'true' indica que é para a IA
            addChatMessage("IA", "Reforcei meu castelo!", true);
            return;
        }
    }
}
    
    function createConversationId(user1, user2) { return [user1.toLowerCase(), user2.toLowerCase()].sort().join('_'); }
    async function openDmGroupsPanel() { const socialData = await fetchSocialData(); if (!socialData || !currentUser) { await showCustomAlert("Não foi possível carregar dados."); return; } dmGroupsOverlay.style.display = 'flex'; dmGroupsMainPanel.style.display = 'block'; chatViewPanel.style.display = 'none'; createGroupPanel.style.display = 'none'; renderDmAndGroupLists(socialData); }
    function renderDmAndGroupLists(socialData) { const myData = socialData[currentUser.username.toLowerCase()]; dmListContainer.innerHTML = ''; if (myData.friends && myData.friends.length > 0) { myData.friends.forEach(friendName => { const item = document.createElement('div'); item.className = 'dm-list-item'; item.textContent = friendName; item.dataset.friendName = friendName; dmListContainer.appendChild(item); }); } else { dmListContainer.innerHTML = '<p>Nenhum amigo para conversar.</p>'; } groupListContainer.innerHTML = ''; const myGroups = Object.entries(socialData.groups || {}).filter(([id, group]) => group.members.includes(currentUser.username)); if (myGroups.length > 0) { myGroups.forEach(([id, group]) => { const item = document.createElement('div'); item.className = 'group-list-item'; item.textContent = group.name; item.dataset.groupId = id; groupListContainer.appendChild(item); }); } else { groupListContainer.innerHTML = '<p>Você não está em nenhum grupo.</p>'; } }
    async function openChatView(type, id) { currentOpenChat = { type, id }; dmGroupsMainPanel.style.display = 'none'; chatViewPanel.style.display = 'flex'; if (type === 'dm') chatWithName.textContent = id; else if (type === 'group') { const socialData = await fetchSocialData(); chatWithName.textContent = socialData.groups[id]?.name || 'Grupo'; } await renderChatMessages(); startChatPoll(); }
    async function renderChatMessages() { if (!currentOpenChat) return; const socialData = await fetchSocialData(); let messages = []; if (currentOpenChat.type === 'dm') { const conversationId = createConversationId(currentUser.username, currentOpenChat.id); messages = socialData.conversations[conversationId] || []; } else { messages = socialData.groups[currentOpenChat.id]?.chat || []; } chatViewMessages.innerHTML = ''; messages.forEach(msg => { const bubble = document.createElement('div'); bubble.className = 'chat-message-bubble'; if (msg.sender.toLowerCase() === currentUser.username.toLowerCase()) { bubble.classList.add('mine'); } else { bubble.classList.add('theirs'); if (currentOpenChat.type === 'group') { bubble.innerHTML = `<span class="sender-name">${msg.sender}</span>`; } } const textNode = document.createTextNode(msg.text); bubble.appendChild(textNode); chatViewMessages.appendChild(bubble); }); chatViewMessages.scrollTop = chatViewMessages.scrollHeight; }
    async function handleSendMessage() { const text = chatViewInput.value.trim(); if (!text || !currentOpenChat) return; const socialData = await fetchSocialData(); const message = { sender: currentUser.username, text, timestamp: Date.now() }; if (currentOpenChat.type === 'dm') { const conversationId = createConversationId(currentUser.username, currentOpenChat.id); if (!socialData.conversations[conversationId]) socialData.conversations[conversationId] = []; socialData.conversations[conversationId].push(message); } else { const groupId = currentOpenChat.id; if (socialData.groups[groupId]) socialData.groups[groupId].chat.push(message); } chatViewInput.value = ''; await updateSocialData(socialData); await renderChatMessages(); }
    function startChatPoll() { stopChatPoll(); chatPollInterval = setInterval(renderChatMessages, 5000); }
    function stopChatPoll() { if (chatPollInterval) clearInterval(chatPollInterval); chatPollInterval = null; }
    function closeChatView() { stopChatPoll(); currentOpenChat = null; dmGroupsMainPanel.style.display = 'block'; chatViewPanel.style.display = 'none'; }
    async function openCreateGroupPanel() { const socialData = await fetchSocialData(); const myFriends = socialData[currentUser.username.toLowerCase()].friends; createGroupFriendsList.innerHTML = ''; if (myFriends && myFriends.length > 0) { myFriends.forEach(friendName => { const item = document.createElement('div'); item.className = 'friend-invite-item'; item.innerHTML = `<input type="checkbox" id="invite-${friendName}" data-friend-name="${friendName}"><label for="invite-${friendName}">${friendName}</label>`; createGroupFriendsList.appendChild(item); }); } else { createGroupFriendsList.innerHTML = '<p>Você precisa de amigos para convidar.</p>'; } dmGroupsMainPanel.style.display = 'none'; createGroupPanel.style.display = 'block'; }
    async function handleCreateGroup() { const groupName = createGroupNameInput.value.trim(); if (!groupName) { await showCustomAlert("O grupo precisa de um nome."); return; } const invitedFriends = Array.from(createGroupFriendsList.querySelectorAll('input:checked')).map(input => input.dataset.friendName); const socialData = await fetchSocialData(); const groupId = `group_${Date.now()}`; socialData.groups[groupId] = { name: groupName, owner: currentUser.username, members: [currentUser.username], chat: [] }; const notification = { groupId, groupName, sender: currentUser.username }; invitedFriends.forEach(friendName => { if (socialData[friendName.toLowerCase()]) { if (!socialData[friendName.toLowerCase()].groupInvites) socialData[friendName.toLowerCase()].groupInvites = []; socialData[friendName.toLowerCase()].groupInvites.push(notification); } }); const success = await updateSocialData(socialData); if (success) { await showCustomAlert(`Grupo "${groupName}" criado e convites enviados!`); createGroupNameInput.value = ''; dmGroupsOverlay.style.display = 'none'; } }
    async function handleGroupInviteResponse(notificationData, accept) { const socialData = await fetchSocialData(); if (!socialData) return; const myData = socialData[currentUser.username.toLowerCase()]; myData.groupInvites = myData.groupInvites.filter(inv => inv.groupId !== notificationData.groupId); if (accept) { const group = socialData.groups[notificationData.groupId]; if (group && !group.members.includes(currentUser.username)) { group.members.push(currentUser.username); } } const success = await updateSocialData(socialData); if (success && accept) { await showCustomAlert(`Você entrou no grupo "${notificationData.groupName}"!`); } hideInteractiveNotification(); checkForNotifications(); }
    
    // --- Funções de Chat e UI Auxiliares ---

// Adiciona uma mensagem ao painel de chat do jogo
function addChatMessage(sender, message, isAI) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message-ingame');
    if (isAI) {
        messageElement.classList.add('ai-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    } else {
        messageElement.classList.add('player-message');
        messageElement.innerHTML = `<strong>Você:</strong> ${message}`;
    }
    chatMessages.appendChild(messageElement);
    // Rola para a mensagem mais recente
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mostra uma bolha de notificação (usada para emotes)
function showNotificationBubble(content, type) {
    const bubble = document.createElement('div');
    bubble.className = `notification-bubble ${type}`;
    bubble.textContent = content;
    notificationBubblesContainer.appendChild(bubble);

    // Remove a bolha após a animação
    setTimeout(() => {
        bubble.remove();
    }, 2000);
}

// Faz a IA reagir a um emote do jogador
function triggerAIEmoteReaction(emote) {
    const reaction = aiPhrases.emoteReaction[emote];
    if (reaction) {
        const randomReaction = reaction[Math.floor(Math.random() * reaction.length)];
        setTimeout(() => {
            addChatMessage("IA", randomReaction, true);
        }, 800); // Pequeno atraso para a reação parecer mais natural
    }
}

// Pega uma frase aleatória de uma lista no objeto aiPhrases
function getRandomPhrase(phraseType) {
    const phraseList = aiPhrases[phraseType];
    if (phraseList && phraseList.length > 0) {
        return phraseList[Math.floor(Math.random() * phraseList.length)];
    }
    return ""; // Retorna string vazia se não encontrar
}
    
    // --- Funções do Jogo (Principais) ---
    function logDebugMessage(message, type = 'info') { if (!isDebugModeEnabled) return; const entry = document.createElement('div'); entry.className = `log-entry ${type}`; entry.innerHTML = `<span class="log-time">[${new Date().toLocaleTimeString()}]</span> ${message}`; debugLogContent.appendChild(entry); debugLogContent.scrollTop = debugLogContent.scrollHeight; }
    
    function preloadAllSprites() {
        const allEntityTypes = [
            ...activeGameMonsterTypes,
            ...Object.values(activeGameGuardianTypes)
        ];

        allEntityTypes.forEach(type => {
            let id = type.isCustom ? type.modData.id : type.id;
            if (!id || spriteStatus.has(id)) return;

            spriteStatus.set(id, 'loading');
            const img = new Image();
            img.onload = () => {
                spriteStatus.set(id, 'loaded');
            };
            img.onerror = () => {
                spriteStatus.set(id, 'failed');
            };
            img.src = `${SPRITE_PATH}${id}.png`;
        });
    }

    function prepareActiveGameData(options = {}) {
        const { selectedModIds = [], selectedModpackIds = [] } = options;
    
        let modsToProcess = new Map();
    
        selectedModIds.forEach(id => {
            const mod = allMods.find(m => m.id === id);
            if (mod) modsToProcess.set(mod.id, mod);
        });
    
        selectedModpackIds.forEach(packId => {
            const pack = allModpacks.find(p => p.id === packId);
            if (pack && pack.mods) {
                pack.mods.forEach(modId => {
                    const mod = allMods.find(m => m.id === modId);
                    if (mod) modsToProcess.set(mod.id, mod);
                });
            }
        });
    
        if (modsToProcess.size === 0) {
            allMods.filter(m => m.active).forEach(mod => modsToProcess.set(mod.id, mod));
            allModpacks.filter(p => p.active).forEach(pack => {
                if (pack.mods) {
                    pack.mods.forEach(modId => {
                        const mod = allMods.find(m => m.id === modId);
                        if (mod) modsToProcess.set(mod.id, mod);
                    });
                }
            });
        }
    
        activeGameMonsterTypes = [...baseMonsterTypes];
        activeGameBarricadeTypes = [...baseBarricadeTypes];
        activeGameGuardianTypes = JSON.parse(JSON.stringify(baseGuardianTypes));
        customWaveDefinitions = {};
    
        Array.from(modsToProcess.values()).forEach(mod => {
            if (mod.type === 'monster') { activeGameMonsterTypes.push({ ...mod, elementCreator: () => createCustomModElement(mod) }); }
            else if (mod.type === 'barricade') { activeGameBarricadeTypes.push({ ...mod, color: 'transparent', border: '2px solid #ccc', isCustom: true }); }
            else if (mod.type === 'guardian') { activeGameGuardianTypes[mod.id] = { name: mod.name, isCustom: true, modData: mod, evolutions: [{ cost: mod.cost, damage: mod.damage, cooldown: mod.cooldown, range: mod.range }], projectile: { speed: mod.projectileSpeed, size: mod.projectileSize, color: mod.projectileColor, cssClass: 'custom' } }; }
            else if (mod.type === 'wave') { customWaveDefinitions[mod.waveNumber] = mod.spawns; }
        });

        preloadAllSprites();
    }

    function initializeGame(mode = 'single', options = {}) {
        const { savedState = null, saveIndex = null } = options;
        gameMode = mode; loadedSaveSlotIndex = saveIndex;
        prepareActiveGameData(options);
        money = 20; diamonds = 0; bobs = currentUser ? (currentUser.bobs || 0) : 0; strongMonsterKillCount = 0;
        currentWeaponIndex = 0; purchasedWeapons = new Array(weapons.length).fill(false); purchasedWeapons[0] = true;
        projectiles = []; monsterProjectiles = []; monsters = []; barricades = [];
        guardianSlots = [null, null, null]; guardianInventory = []; selectedGuardianInventoryIndex = null;
        isGameOver = false; isPaused = false; isGodMode = false;
        isRageActive = false; if (rageTimeout) clearTimeout(rageTimeout);
        placingSpell = null;
        pauseButton.textContent = 'Pause';
        currentWave = 0; monstersKilledThisWave = 0; isWaveClearMessageSent = true;
        placingBarricade = null; barricadeGhost.style.display = 'none';
        gameMessage.style.display = 'none'; placementModeOverlay.style.display = 'none';
        debugLogContent.innerHTML = ''; logDebugMessage(`--- Novo Jogo Iniciado (Modo: ${gameMode}) ---`, 'wave'); toggleLogButton.style.display = isDebugModeEnabled ? 'block' : 'none';
        castleAbilityIntervals = []; isPlayerCastleDestroyed = false; playerRespawnTimer = 0; playerRespawnTimerElement.style.display = 'none';
        aiHudItem.style.display = gameMode === 'ai' ? 'flex' : 'none'; castleAIElement.style.display = gameMode === 'ai' ? 'block' : 'none'; chatEmoteContainer.style.display = gameMode === 'ai' ? 'flex' : 'none'; chatMessages.innerHTML = ''; aiRespawnTimerElement.style.display = 'none';
        playerCastleIndicator.style.display = 'block'; playerCastleIndicator.textContent = currentUser ? currentUser.username : 'Você';
        bobsInventoryToggleButton.style.display = 'flex';
        if (gameMode === 'ai') { castleElement.style.height = '45%'; castleElement.style.top = '25%'; castleElement.style.transform = 'translateY(-50%)'; castleAIElement.style.left = '0px'; castleAIElement.style.height = '45%'; castleAIElement.style.top = '75%'; castleAIElement.style.transform = 'translateY(-50%)'; playerRespawnTimerElement.style.top = castleElement.style.top; playerRespawnTimerElement.style.height = castleElement.style.height; aiRespawnTimerElement.style.top = castleAIElement.style.top; aiRespawnTimerElement.style.height = castleAIElement.style.height; playerCastleIndicator.style.top = `calc(${castleElement.style.top} - 25px)`; playerCastleIndicator.style.left = `5px`; } else { castleElement.style.height = '100%'; castleElement.style.top = '0'; castleElement.style.transform = 'none'; playerCastleIndicator.style.top = `10px`; playerCastleIndicator.style.left = `5px`; }
        if (gameMode === 'ai') { castleAbilityIntervalsAI = []; isCastleAIDestroyed = false; aiRespawnTimer = 0; guardianInventoryAI = []; guardianSlotsAI = [null, null, null]; updateCastle('wood', 0, { isInitial: true, isAI: true }); }
        if (savedState) { loadGameFromState(savedState); } else { updateGuardianVisuals(); updateGuardianPanel(); updateCastle('wood', 0, { isInitial: true, isAI: false }); updateDiamondDisplay(); updateBobsDisplay(); generateGrassElements(); startNextWave(); }
        startGameLoop();
        if (aiLogicInterval) clearInterval(aiLogicInterval); if (aiAttackInterval) clearInterval(aiAttackInterval);
        if (gameMode === 'ai' && !savedState) { const randomStartPhrase = aiPhrases.start[Math.floor(Math.random() * aiPhrases.start.length)]; setTimeout(() => addChatMessage("IA", randomStartPhrase, true), 2000); aiLogicInterval = setInterval(runAILogic, 2500); aiAttackInterval = setInterval(() => { if(isPaused || isGameOver || isCastleAIDestroyed) return; const target = findNearestMonster(castleAIElement.offsetLeft, castleAIElement.offsetTop + castleAIElement.offsetHeight/2, 9999); if(target) createProjectile(target, weapons[0], { from: 'ai_base', sourceElement: castleAIElement }); }, 1200); }
        gameUI.classList.add('collapsed'); gameUI.classList.remove('expanded'); guardianManagementPanel.classList.remove('open'); shopToggleButton.textContent = 'Loja';
    }
    function updateCastle(type, evolutionLevel, options = {}) { 
        const { isInitial = false, loadedHealth = null, isAI = false, loadedMaxHealth = null } = options; 
        const newLevel = castles[type][evolutionLevel]; 
        if (!newLevel) return; 
        const castleTarget = isAI ? castleAIElement : castleElement; 
        let abilityIntervals = isAI ? castleAbilityIntervalsAI : castleAbilityIntervals; 
        abilityIntervals.forEach(clearInterval); 
        abilityIntervals = []; 
        if (isAI) { 
            currentCastleTypeAI = type; 
            currentCastleEvolutionAI = evolutionLevel; 
            MAX_CASTLE_HEALTH_AI = newLevel.maxHealth; 
            if (loadedHealth !== null) castleHealthAI = loadedHealth; 
            else if (isInitial) castleHealthAI = MAX_CASTLE_HEALTH_AI; 
            castleAIElement.innerHTML = castleElement.innerHTML; 
        } else { 
            currentCastleType = type; 
            currentCastleEvolution = evolutionLevel; 
            MAX_CASTLE_HEALTH = loadedMaxHealth !== null ? loadedMaxHealth : newLevel.maxHealth; 
            if (loadedHealth !== null) castleHealth = loadedHealth; 
            else if (isInitial) castleHealth = MAX_CASTLE_HEALTH; 
        } 
        castleTarget.className = newLevel.cssClass; 
        if (!isAI) { 
            const areSoldiersVisible = type === 'stone'; 
            soldier1.style.display = areSoldiersVisible ? 'block' : 'none'; 
            soldier1.style.top = (castleTarget.offsetTop + 10) + 'px'; 
            soldier1.style.left = (castleTarget.offsetLeft + 20) + 'px'; 
            soldier2.style.display = areSoldiersVisible ? 'block' : 'none'; 
            soldier2.style.top = (castleTarget.offsetTop + 10) + 'px'; 
            soldier2.style.left = (castleTarget.offsetLeft + 50) + 'px'; 
        } 
        newLevel.abilities.forEach(ab => { 
            let i; 
            if (ab.type === 'regen') { 
                i = setInterval(() => { 
                    if (isPaused || isGameOver) return; 
                    if(isAI) { 
                        if (!isCastleAIDestroyed && castleHealthAI < MAX_CASTLE_HEALTH_AI) { 
                            castleHealthAI = Math.min(MAX_CASTLE_HEALTH_AI, castleHealthAI + ab.amount); 
                            updateCastleHealthDisplay(true); 
                        } 
                    } else { 
                        if (!isPlayerCastleDestroyed && castleHealth < MAX_CASTLE_HEALTH) { 
                            castleHealth = Math.min(MAX_CASTLE_HEALTH, castleHealth + ab.amount); 
                            updateCastleHealthDisplay(false); 
                        } 
                    } 
                }, ab.interval); 
            } else if (ab.type === 'auto-attack') { 
                i = setInterval(() => { 
                    if (isPaused || isGameOver || (isAI ? isCastleAIDestroyed : isPlayerCastleDestroyed)) return; 
                    const sourceX = castleTarget.offsetLeft + castleTarget.offsetWidth; 
                    const sourceY = castleTarget.offsetTop + castleTarget.offsetHeight / 2; 
                    const target = findNearestMonster(sourceX, sourceY, 9999); 
                    if (target) { 
                        const weaponTemplate = weapons[ab.weaponIndex]; 
                        const projectileWeapon = {...weaponTemplate, damage: ab.damage || weaponTemplate.damage }; 
                        if (isRageActive && !isAI) {
                            projectileWeapon.damage *= BOBS_SHOP_ITEMS.rage.effect.multiplier;
                        }
                        createProjectile(target, projectileWeapon, {from: 'castle', sourceElement: castleTarget }); 
                        if (!isAI && areSoldiersVisible) { 
                            [soldier1, soldier2].forEach(s => { s.classList.add('shooting'); setTimeout(() => s.classList.remove('shooting'), 200); }); 
                        } 
                    } 
                }, ab.interval); 
            } else if (ab.type === 'generate-money') { 
                i = setInterval(() => { 
                    if (!isPaused && !isGameOver) { 
                        money += ab.amount; 
                        updateMoneyDisplay(); 
                        logDebugMessage(`+ $${ab.amount} do castelo ${isAI ? 'da IA' : ''}`); 
                    } 
                }, ab.interval); 
            } 
            if (i) abilityIntervals.push(i); 
        }); 
        if (isAI) castleAbilityIntervalsAI = abilityIntervals; 
        else castleAbilityIntervals = abilityIntervals; 
        updateCastleHealthDisplay(isAI); 
        updateMoneyDisplay(); 
    }
    function evolveCurrentCastle(isAI = false) { let castleType = isAI ? currentCastleTypeAI : currentCastleType; let evolution = isAI ? currentCastleEvolutionAI : currentCastleEvolution; const castlePath = castles[castleType]; if (evolution >= castlePath.length - 1) return false; const nextLevel = castlePath[evolution + 1]; if (money >= nextLevel.cost) { money -= nextLevel.cost; logDebugMessage(`Castelo ${isAI ? '(IA)' : ''} evoluído para: ${castleType} Nv.${(isAI ? currentCastleEvolutionAI : currentCastleEvolution) + 2}`, 'purchase'); updateCastle(castleType, (isAI ? ++currentCastleEvolutionAI : ++currentCastleEvolution), {isAI: isAI}); return true; } return false; }
    function findNearestMonster(sourceX, sourceY, range) { let nearest = null; let minDistSq = range * range; for (const m of monsters) { const distSq = Math.pow(m.x - sourceX, 2) + Math.pow(m.y - sourceY, 2); if (distSq < minDistSq) { minDistSq = distSq; nearest = m; } } return nearest; }
    function findClosestCastle(monster) { if (gameMode !== 'ai') return { element: castleElement, isAI: false, isDestroyed: () => isPlayerCastleDestroyed }; const targetPlayer = Math.random() > 0.5; if (targetPlayer) { if (isPlayerCastleDestroyed) return { element: castleAIElement, isAI: true, isDestroyed: () => isCastleAIDestroyed }; return { element: castleElement, isAI: false, isDestroyed: () => isPlayerCastleDestroyed }; } else { if (isCastleAIDestroyed) return { element: castleElement, isAI: false, isDestroyed: () => isPlayerCastleDestroyed }; return { element: castleAIElement, isAI: true, isDestroyed: () => isCastleAIDestroyed }; } }
    function updateCastleHealthDisplay(isAI) { const health = isAI ? castleHealthAI : castleHealth; const maxHealth = isAI ? MAX_CASTLE_HEALTH_AI : MAX_CASTLE_HEALTH; const bar = isAI ? castleHealthBarAI : castleHealthBar; const text = isAI ? castleHealthTextAI : castleHealthText; const p = (health / maxHealth) * 100; bar.style.width = `${Math.max(0, p)}%`; bar.style.backgroundColor = p > 50 ? '#28a745' : p > 20 ? '#ffc107' : '#dc3545'; text.textContent = `${Math.max(0, Math.ceil(health))}/${maxHealth}`; }
    function updateMoneyDisplay() { moneyDisplay.textContent = `Dinheiro: $${money}`; updateShopButtons(); updateGuardianPanel(); }
    function updateDiamondDisplay() { diamondDisplaySpan.textContent = diamonds; updateShopButtons(); }
    function updateBobsDisplay() { if (bobsDisplaySpan) { bobsDisplaySpan.textContent = Math.floor(bobs); } }
    function updateShopButtons() { document.querySelectorAll('.buy-button[data-item-type="weapon"], .buy-button[data-item-type="special"]').forEach(btn => { const type = btn.dataset.itemType; const id = btn.dataset.itemId; if (type === 'weapon') { const weaponId = parseInt(id); const item = weapons[weaponId]; const isPurchased = purchasedWeapons[weaponId]; if (weaponId === currentWeaponIndex) { btn.textContent = `${item.name} (Equipada)`; btn.style.backgroundColor = '#28a745'; btn.style.color = 'white'; btn.disabled = true; } else if (isPurchased) { btn.textContent = `Equipar ${item.name}`; btn.style.backgroundColor = '#007bff'; btn.style.color = 'white'; btn.disabled = false; } else { btn.textContent = `Comprar ${item.name} ($${item.cost})`; btn.style.backgroundColor = 'white'; btn.style.color = 'black'; btn.disabled = money < item.cost; } } else if (type === 'special') { const item = specialItems[id]; if (item) { const canAfford = diamonds >= item.cost; const needsHeal = (!isPlayerCastleDestroyed && castleHealth < MAX_CASTLE_HEALTH) || (gameMode === 'ai' && !isCastleAIDestroyed && castleHealthAI < MAX_CASTLE_HEALTH_AI); btn.textContent = `${item.name} (💎 ${item.cost})`; btn.disabled = !canAfford || !needsHeal; } } }); const barricadeShop = document.getElementById('barricade-shop'); const barricadeHeader = barricadeShop.querySelector('h3'); barricadeShop.innerHTML = ''; if (barricadeHeader) barricadeShop.appendChild(barricadeHeader); activeGameBarricadeTypes.forEach((item) => { const btn = document.createElement('button'); btn.className = 'buy-button'; btn.dataset.itemType = 'barricade'; btn.dataset.itemId = item.id; btn.textContent = `${item.name} ($${item.cost})`; btn.disabled = money < item.cost; barricadeShop.appendChild(btn); }); const castleShopHeader = castleShopContainer.querySelector('h3'); castleShopContainer.innerHTML = ''; if(castleShopHeader) castleShopContainer.appendChild(castleShopHeader); for (const id in castles) { const castlePath = castles[id]; const baseLevel = castlePath[0]; const isSelected = id === currentCastleType; const level = isSelected ? currentCastleEvolution + 1 : 1; const maxLevel = castlePath.length; const isMaxLevel = isSelected && level >= maxLevel; let mainCostText = ''; if (baseLevel.costType === 'diamond') { mainCostText = `💎 ${baseLevel.cost}`; } else { mainCostText = `$${baseLevel.cost > 0 ? baseLevel.cost : 'Grátis'}`; } let evoCostText = 'MAX'; let evoDisabledClass = 'disabled'; if (isSelected && !isMaxLevel) { evoCostText = `$${castlePath[level].cost}`; if (money >= castlePath[level].cost) { evoDisabledClass = ''; } } const itemHTML = `<div class="castle-shop-item ${isSelected ? 'selected' : ''}" data-castle-id="${id}"><div class="castle-main-btn"><span class="castle-name">${baseLevel.name}</span><span class="castle-cost">${mainCostText}</span></div><div class="castle-side-btns"><div class="castle-level-btn"><div class="level-indicator-bg"><div class="level-indicator-fill level-${level}"></div></div><span>${isMaxLevel ? 'MAX' : 'LVL ' + level}</span></div><div class="castle-evo-btn ${isSelected ? evoDisabledClass : 'disabled'}" data-castle-id="${id}"><span>${evoCostText}</span><span>EVO</span></div></div></div>`; castleShopContainer.innerHTML += itemHTML; } const guardianShopHeader = guardianShopContainer.querySelector('h3'); guardianShopContainer.innerHTML = ''; if (guardianShopHeader) guardianShopContainer.appendChild(guardianShopHeader); let buyOptionsHTML = '<div class="buy-options">'; for (const typeId in activeGameGuardianTypes) { const type = activeGameGuardianTypes[typeId]; const cost = type.evolutions[0].cost; const canAfford = money >= cost; buyOptionsHTML += `<button class="guardian-buy-btn" data-type-id="${typeId}" ${canAfford ? '' : 'disabled'}>${type.name} ($${cost})</button>`; } buyOptionsHTML += '</div>'; guardianShopContainer.innerHTML += buyOptionsHTML; document.querySelectorAll('.buy-button, .guardian-buy-btn').forEach(btn => { if (btn.disabled && !btn.textContent.includes('Equipada')) { btn.style.backgroundColor = '#f0f0f0'; btn.style.color = '#a0a0a0'; btn.style.cursor = 'not-allowed'; } }); }
    function updateGuardianPanel() { guardianInventoryContainer.innerHTML = ''; guardianSlotsContainer.innerHTML = ''; if (guardianInventory.length === 0) { guardianInventoryContainer.innerHTML = '<div class="guardian-slot empty">Compre guardiões na loja!</div>'; } else { guardianInventory.forEach((guardian, index) => { const type = activeGameGuardianTypes[guardian.typeId]; if (!type) return; const card = document.createElement('div'); card.className = 'guardian-card'; if (index === selectedGuardianInventoryIndex) { card.classList.add('selected'); } card.dataset.inventoryIndex = index; const cardContent = document.createElement('div'); cardContent.className = 'guardian-card-content'; cardContent.innerHTML = `<div>${type.name} <span>(Nv. ${guardian.level})</span></div>`; if (!type.isCustom && guardian.level < 4) { const nextEvo = type.evolutions[guardian.level]; const evolveBtn = document.createElement('button'); evolveBtn.className = 'guardian-evolve-btn'; evolveBtn.textContent = `($${nextEvo.cost})`; evolveBtn.disabled = money < nextEvo.cost; evolveBtn.dataset.inventoryIndex = index; cardContent.appendChild(evolveBtn); } else { const maxLabel = document.createElement('span'); maxLabel.className = 'max-level-label'; maxLabel.textContent = 'MAX'; cardContent.appendChild(maxLabel); } card.appendChild(cardContent); guardianInventoryContainer.appendChild(card); }); } guardianSlots.forEach((guardian, index) => { const slot = document.createElement('div'); slot.className = 'guardian-slot'; slot.dataset.slotIndex = index; if (guardian) { const type = activeGameGuardianTypes[guardian.typeId]; if (!type) { slot.classList.add('empty'); slot.innerHTML = `Slot ${index + 1} Vazio (Mod Removido)`; } else { slot.innerHTML = `<b>Slot ${index+1}:</b> ${type.name} <span>(Nv. ${guardian.level})</span>`; } } else { slot.classList.add('empty'); slot.innerHTML = `Slot ${index + 1} Vazio`; } guardianSlotsContainer.appendChild(slot); }); }
    
    function updateGuardianVisuals() {
        guardianPlacementArea.innerHTML = '';
        const castleWidth = 80;
    
        const renderGuardian = (guardian, index, isAI) => {
            if (!guardian) return;
            const type = activeGameGuardianTypes[guardian.typeId];
            if (!type) return;
    
            let visualElement;
            const typeId = type.isCustom ? type.modData.id : guardian.typeId;
            const sizeData = type.isCustom ? type.modData : type;
    
            if (spriteStatus.get(typeId) === 'loaded') {
                visualElement = document.createElement('img');
                visualElement.src = `${SPRITE_PATH}${typeId}.png`;
                visualElement.style.width = `${sizeData.width}px`;
                visualElement.style.height = `${sizeData.height}px`;
            } else {
                if (type.isCustom) {
                    visualElement = createCustomModElement(type.modData);
                } else {
                    visualElement = document.createElement('div');
                    visualElement.className = `guardian guardian-${guardian.typeId}`;
                }
            }
            
            visualElement.classList.add('guardian');
            if (isRageActive && !isAI) {
                visualElement.classList.add('rage-active');
            }
            const targetCastle = isAI ? castleAIElement : castleElement;
            const position = guardianSlotPositions[index];
            const yPos = targetCastle.offsetTop + (position.y / 100) * targetCastle.offsetHeight;
            visualElement.style.left = `${targetCastle.offsetLeft + castleWidth + 10}px`;
            visualElement.style.top = `${yPos}px`;
            guardianPlacementArea.appendChild(visualElement);
        };
    
        guardianSlots.forEach((guardian, index) => renderGuardian(guardian, index, false));
        if (gameMode === 'ai' && guardianSlotsAI) {
            guardianSlotsAI.forEach((guardian, index) => renderGuardian(guardian, index, true));
        }
    }
    
    function prepareBarricadePlacement(type) { placingBarricade = type; togglePause(true); gameUI.classList.add('collapsed'); gameUI.classList.remove('expanded'); shopToggleButton.textContent = 'Loja'; placementModeOverlay.style.display = 'flex'; document.getElementById('placement-message').textContent = 'Dê um clique duplo para colocar a barricada!'; placementModeOverlay.style.cursor = 'crosshair'; placementModeOverlay.addEventListener('dblclick', placeBarricadeAtClick); barricadeGhost.style.display = 'block'; barricadeGhost.style.width = `${type.width}px`; barricadeGhost.style.height = `${type.height}px`; barricadeGhost.querySelector('.health-preview').textContent = `Vida: ${type.health}`; document.getElementById('top-hud').style.display = 'none'; }
    function placeBarricade(type, loadedData) { if (!type) return null; const x = loadedData ? loadedData.x : 0; const y = loadedData ? loadedData.y : 0; let barricadeElement; if (type.isCustom) { barricadeElement = createCustomModElement(type); barricadeElement.classList.add('barricade'); const hc=document.createElement('div'); hc.style.cssText="position:absolute;top:-10px;left:0;width:100%;height:4px;background-color:#555;overflow:hidden;border-radius:2px"; const hb=document.createElement('div'); hb.classList.add('barricade-health-bar'); hb.style.cssText="width:100%;height:100%;background-color:#00ff00;transition:width .1s"; hc.appendChild(hb); barricadeElement.appendChild(hc); } else { barricadeElement = createBarricadeElement(type); } const b = { id: Date.now() + Math.random(), typeId: type.id, element: barricadeElement, x: x, y: y, health: loadedData ? loadedData.health : type.health, maxHealth: type.health, width: type.width, height: type.height }; b.element.style.left = `${x}px`; b.element.style.top = `${y}px`; b.element.style.position = 'absolute'; const healthPercentage = (b.health / b.maxHealth) * 100; const hb = b.element.querySelector('.barricade-health-bar'); if (hb) hb.style.width = `${healthPercentage}%`; gameArea.appendChild(b.element); barricades.push(b); }
    function placeBarricadeAtClick(e) { if (!placingBarricade) return; const type = placingBarricade; const r = gameContainer.getBoundingClientRect(); const x = e.clientX - r.left - (type.width / 2); const y = e.clientY - r.top - (type.height / 2); const castleAreaWidth = gameMode === 'ai' ? 160 : 80; if (x < castleAreaWidth + 50 || x + type.width > gameContainer.offsetWidth - 20 || y < 10 || y + type.height > gameContainer.offsetHeight - 10 || barricades.some(b => (x < b.x + b.width && x + type.width > b.x && y < b.y + b.height && y + type.height > b.y)) || money < type.cost) return; money -= type.cost; updateMoneyDisplay(); placeBarricade(type, { x: x, y: y, health: type.health }); logDebugMessage(`Barricada '${type.name}' posicionada.`, 'purchase'); exitBarricadePlacementMode(); }
    function exitBarricadePlacementMode() { placementModeOverlay.removeEventListener('dblclick', placeBarricadeAtClick); placingBarricade = null; barricadeGhost.style.display = 'none'; placementModeOverlay.style.display = 'none'; togglePause(false); document.getElementById('top-hud').style.display = 'flex'; }
    function spawnMonster(specificTypeId = null) { if (isGameOver || isPaused) return; let typeIdToSpawn = specificTypeId; if (!typeIdToSpawn) { if (currentWaveSpawnList.length > 0) { typeIdToSpawn = currentWaveSpawnList.shift(); } else { console.warn(`Tentou spawnar monstro, mas a lista da onda ${currentWave} está vazia.`); return; } } const type = activeGameMonsterTypes.find(m => m.id === typeIdToSpawn); if (!type) { console.error(`Tipo de monstro com ID '${typeIdToSpawn}' não encontrado.`); return; } const el = type.elementCreator(); const height = type.height || 50; const sy = document.getElementById('top-hud').offsetHeight + 20; const y = Math.random() * (gameContainer.offsetHeight - sy - height) + sy; const initialTarget = findClosestCastle(); const m = { id: Date.now(), element: el, x: gameContainer.offsetWidth + 50, y, name: type.name, health: type.health, maxHealth: type.health, damage: type.damage, speed: type.speed, money: type.money, attackType: type.attackType || 'melee', projectile: type.projectile || null, isSlowed: false, slowTimeout: null, lastAttackTime: 0, currentSpeed: type.speed * (1 + (currentWave * 0.03)), isFlying: type.isFlying || false, bloodyFeetUntil: 0, lastFootprintTime: 0, targetCastle: initialTarget }; el.style.left = `${m.x}px`; el.style.top = `${y}px`; gameArea.appendChild(el); const hc = document.createElement('div'); hc.style.cssText="position:absolute;top:-15px;left:0;width:100%;height:5px;background-color:#555;overflow:hidden;border-radius:2px"; const hb = document.createElement('div'); hb.classList.add('monster-health-bar'); hb.style.cssText="width:100%;height:100%;background-color:red;transition:width .1s"; hc.appendChild(hb); el.appendChild(hc); monsters.push(m); monstersSpawnedThisWave++; lastMonsterSpawnTime = Date.now(); }
    function startNextWave() {
        currentWave++; isWaveClearMessageSent = false; monstersSpawnedThisWave = 0; currentWaveSpawnList = [];
        if (customWaveDefinitions[currentWave]) { logDebugMessage(`Onda ${currentWave} customizada encontrada.`, 'wave'); const waveDef = customWaveDefinitions[currentWave]; waveDef.forEach(spawnInfo => { for (let i = 0; i < spawnInfo.count; i++) { currentWaveSpawnList.push(spawnInfo.monsterId); } }); for (let i = currentWaveSpawnList.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [currentWaveSpawnList[i], currentWaveSpawnList[j]] = [currentWaveSpawnList[j], currentWaveSpawnList[i]]; } } else { logDebugMessage(`Gerando onda padrão ${currentWave}.`, 'wave'); let baseSpawnList = []; if (currentWave < 2) baseSpawnList.push(...Array(5).fill('goblin')); else if (currentWave < 5) baseSpawnList.push(...Array(7).fill('goblin'), ...Array(3).fill('bat')); else if (currentWave < 8) baseSpawnList.push(...Array(5).fill('slime'), ...Array(8).fill('zombie')); else if (currentWave < 12) baseSpawnList.push(...Array(10).fill('zombie'), ...Array(5).fill('skeleton')); else if (currentWave < 16) baseSpawnList.push(...Array(6).fill('skeleton'), ...Array(4).fill('ghost'), ...Array(3).fill('ogre')); else if (currentWave >= 16 && currentWave % 5 === 0) baseSpawnList.push('dragon'); else baseSpawnList.push(...Array(5).fill('ogre'), ...Array(3).fill('dark-mage'), ...Array(2).fill('stone-golem')); if (baseSpawnList.length === 0) { logDebugMessage(`Onda ${currentWave} sem monstros, gerando padrão.`, 'wave'); baseSpawnList.push(...Array(10).fill('ogre'), ...Array(8).fill('dark-mage'), ...Array(5).fill('stone-golem')); } currentWaveSpawnList.push(...baseSpawnList); activeGameMonsterTypes.forEach(monsterMod => { if (monsterMod.spawnWaves && monsterMod.spawnWaves.includes(currentWave)) { logDebugMessage(`Adicionando ${monsterMod.spawnCount}x ${monsterMod.name} à onda.`, 'wave'); for (let i = 0; i < monsterMod.spawnCount; i++) { currentWaveSpawnList.push(monsterMod.id); } } }); }
        if (gameMode === 'ai') { currentWaveSpawnList = [...currentWaveSpawnList, ...currentWaveSpawnList]; setTimeout(() => addChatMessage("IA", getRandomPhrase('waveStart'), true), 1000); } totalMonstersToSpawn = currentWaveSpawnList.length; waveInfo.textContent = `Onda: ${currentWave}`; logDebugMessage(`Onda ${currentWave} iniciada! Monstros: ${totalMonstersToSpawn}`, 'wave'); clearInterval(monsterSpawnInterval); monsterSpawnInterval = setInterval(() => { if(monstersSpawnedThisWave < totalMonstersToSpawn) spawnMonster(); else clearInterval(monsterSpawnInterval); }, Math.max(400, 2000 - (currentWave * 100)));
    }
    function shootProjectile(target) { if (isGameOver || isPaused || !target || isPlayerCastleDestroyed) return; const weapon = weapons[currentWeaponIndex]; if (Date.now() - lastShotTime < weapon.cooldown) return; lastShotTime = Date.now(); createProjectile(target, weapon, {from: 'player', sourceElement: castleElement}); }
    function createProjectile(target, weaponStats, source) { if (!target) return; let sx, sy; let completeWeapon; if (source.from === 'guardian') { sx = source.x; sy = source.y; const guardianType = activeGameGuardianTypes[source.guardianTypeId]; const projectileBase = guardianType.projectile; completeWeapon = { ...weaponStats, ...projectileBase }; } else { sx = source.sourceElement.offsetLeft + source.sourceElement.offsetWidth + 5; sy = source.sourceElement.offsetTop + source.sourceElement.offsetHeight / 2; completeWeapon = { ...weaponStats }; } const el = document.createElement('div'); el.classList.add('projectile', completeWeapon.cssClass); el.style.cssText=`position:absolute;width:${completeWeapon.size}px;height:${completeWeapon.size}px;background-color:${completeWeapon.color};border-radius:50%;z-index:50;left:${sx}px;top:${sy}px;`; gameArea.appendChild(el); projectiles.push({ element: el, x: sx, y: sy, targetMonster: target, ...completeWeapon }); }
    function handleProjectileHit(p) { if (!p.targetMonster) return; const impactX = p.targetMonster.x + p.targetMonster.element.offsetWidth/2; const impactY = p.targetMonster.y + p.targetMonster.element.offsetHeight/2; if (p.aoeRadius) { monsters.forEach(m => { const distSq = Math.pow(m.x - impactX, 2) + Math.pow(m.y - impactY, 2); if (distSq <= p.aoeRadius * p.aoeRadius) { damageMonster(m, p.damage); } }); } else { damageMonster(p.targetMonster, p.damage); } if (p.effect === 'slow' && p.targetMonster) applySlowEffect(p.targetMonster); if (p.element) p.element.remove(); }
    function damageMonster(monster, damageAmount) { if (!monster || monster.health <= 0) return; monster.health -= damageAmount; if (monster.element) { const hb = monster.element.querySelector('.monster-health-bar'); if (hb) hb.style.width = `${Math.max(0, monster.health / monster.maxHealth) * 100}%`; monster.element.style.transition = 'transform 0.08s, opacity 0.08s'; monster.element.style.opacity = '0.7'; monster.element.style.transform = 'scale(0.9)'; setTimeout(() => { if(monster.element) { monster.element.style.opacity = '1'; monster.element.style.transform = 'scale(1)'; } }, 80); } }
    function applySlowEffect(monster) { if (!monster || monster.isSlowed) return; clearTimeout(monster.slowTimeout); monster.isSlowed=true; if (monster.element) monster.element.classList.add('slowed'); monster.slowTimeout = setTimeout(() => { if (monster) { monster.isSlowed = false; if(monster.element) monster.element.classList.remove('slowed'); } }, 3000); }
    function handleMonsterDeath(monster, index) { money += monster.money; monstersKilledThisWave++; if (monster.money > 3) { strongMonsterKillCount++; if (strongMonsterKillCount >= 3) { diamonds++; updateDiamondDisplay(); strongMonsterKillCount = 0; logDebugMessage(`+1 Diamante!`, 'diamond'); } } const corpse = monster.element.cloneNode(true); corpse.style.animation = monster.isFlying ? 'flying-monster-death-fall 1s forwards' : 'monster-death-fall 1s forwards'; corpse.querySelector('.monster-health-bar')?.remove(); corpse.style.zIndex = 1; gameArea.appendChild(corpse); corpse.addEventListener('animationend', () => corpse.remove(), { once: true }); if (!monster.isFlying) { const puddle = document.createElement('div'); puddle.className = 'blood-puddle'; puddle.style.left = `${monster.x}px`; puddle.style.top = `${monster.y + monster.element.offsetHeight * 0.7}px`; gameArea.appendChild(puddle); } monster.element.remove(); monsters.splice(index, 1); updateMoneyDisplay(); }
    async function gameLoop() { 
        if (isGameOver || isPaused) return; 
        const now = Date.now(); 
        if (isPlayerCastleDestroyed) { 
            playerRespawnTimer -= 1000/60; 
            playerRespawnTimerElement.innerHTML = `${Math.ceil(playerRespawnTimer/1000)}s <span>RENASCER</span>`; 
            if (playerRespawnTimer <= 0) { 
                isPlayerCastleDestroyed = false; 
                castleHealth = MAX_CASTLE_HEALTH / 2; 
                castleElement.classList.remove('castle-destroyed'); 
                playerRespawnTimerElement.style.display = 'none'; 
                updateCastleHealthDisplay(false); 
            } 
        } 
        if (gameMode === 'ai' && isCastleAIDestroyed) { 
            aiRespawnTimer -= 1000/60; 
            aiRespawnTimerElement.innerHTML = `${Math.ceil(aiRespawnTimer/1000)}s <span>RENASCER</span>`; 
            if (aiRespawnTimer <= 0) { 
                isCastleAIDestroyed = false; 
                castleHealthAI = MAX_CASTLE_HEALTH_AI / 2; 
                castleAIElement.classList.remove('castle-destroyed'); 
                aiRespawnTimerElement.style.display = 'none'; 
                updateCastleHealthDisplay(true); 
            } 
        } 
        projectiles.forEach((p, i) => { 
            if (!p.element || !p.targetMonster || p.targetMonster.health <= 0) { 
                if (p.element) p.element.remove(); 
                projectiles.splice(i, 1); 
                return; 
            } 
            const tx = p.targetMonster.x + p.targetMonster.element.offsetWidth/2, ty = p.targetMonster.y + p.targetMonster.element.offsetHeight/2; 
            const dist = Math.hypot(tx-p.x, ty-p.y); 
            if (dist < p.speed+5) { 
                handleProjectileHit(p); 
                projectiles.splice(i, 1); 
            } else { 
                p.x += (tx-p.x)/dist*p.speed; 
                p.y += (ty-p.y)/dist*p.speed; 
                p.element.style.left=`${p.x}px`; 
                p.element.style.top=`${p.y}px`; 
            } 
        }); 
        guardianSlots.forEach((guardian, index) => { 
            if (guardian === null) return; 
            const guardianType = activeGameGuardianTypes[guardian.typeId]; 
            if (!guardianType) return; 
            const stats = guardianType.evolutions[guardian.level - 1]; 
            const sourceX = castleElement.offsetLeft + castleElement.offsetWidth + 10; 
            const sourceY = castleElement.offsetTop + (guardianSlotPositions[index].y / 100) * castleElement.offsetHeight; 
            if (now - guardian.lastAttackTime > stats.cooldown) { 
                const target = findNearestMonster(sourceX, sourceY, stats.range); 
                if (target) { 
                    guardian.lastAttackTime = now; 
                    let finalStats = {...stats};
                    if (isRageActive) {
                        finalStats.damage *= BOBS_SHOP_ITEMS.rage.effect.multiplier;
                    }
                    createProjectile(target, finalStats, { from: 'guardian', guardianTypeId: guardian.typeId, x: sourceX, y: sourceY }); 
                } 
            } 
        }); 
        if (gameMode === 'ai') { 
            guardianSlotsAI.forEach((guardian, index) => { 
                if (guardian === null) return; 
                const guardianType = activeGameGuardianTypes[guardian.typeId]; 
                if (!guardianType) return; 
                const stats = guardianType.evolutions[guardian.level - 1]; 
                const sourceX = castleAIElement.offsetLeft + castleAIElement.offsetWidth + 10; 
                const sourceY = castleAIElement.offsetTop + (guardianSlotPositions[index].y / 100) * castleAIElement.offsetHeight; 
                if (now - guardian.lastAttackTime > stats.cooldown) { 
                    const target = findNearestMonster(sourceX, sourceY, stats.range); 
                    if (target) { 
                        guardian.lastAttackTime = now; 
                        createProjectile(target, stats, { from: 'guardian', guardianTypeId: guardian.typeId, x: sourceX, y: sourceY }); 
                    } 
                } 
            }); 
        } 
        for (let i = monsters.length - 1; i >= 0; i--) { 
            const m = monsters[i]; 
            if (m.health <= 0) { 
                handleMonsterDeath(m, i); 
                continue; 
            }
            if (m.stunnedUntil && Date.now() < m.stunnedUntil) {
                continue; 
            }
            if (m.targetCastle.isDestroyed()) { 
                if (m.targetCastle.isAI) { 
                    m.targetCastle = { element: castleElement, isAI: false, isDestroyed: () => isPlayerCastleDestroyed }; 
                } else { 
                    m.targetCastle = { element: castleAIElement, isAI: true, isDestroyed: () => isCastleAIDestroyed }; 
                } 
            } 
            let castleTargetElement = m.targetCastle.element; 
            let tx = castleTargetElement.offsetLeft + castleTargetElement.offsetWidth; 
            let b = null; 
            for (const bar of barricades) { 
                if (m.x+m.element.offsetWidth>=bar.x && m.x<=bar.x+bar.width && m.y+m.element.offsetHeight/2>bar.y && m.y+m.element.offsetHeight/2<bar.y+bar.height) { 
                    castleTargetElement = bar.element; 
                    tx = bar.x; 
                    b = bar; 
                    break; 
                } 
            } 
            const speed = m.isSlowed ? m.speed * 0.5 : m.currentSpeed; 
            const targetY = m.targetCastle.element.offsetTop + m.targetCastle.element.offsetHeight / 2; 
            const monsterY = m.y + m.element.offsetHeight / 2; 
            const yDist = targetY - monsterY; 
            if (Math.abs(yDist) > speed) { 
                m.y += Math.sign(yDist) * speed * 0.7; 
            } 
            if (m.attackType === 'ranged') { 
                if (Math.hypot(m.x - tx, monsterY - targetY) > m.projectile.range) { 
                    m.x -= speed; 
                } else if (now - m.lastAttackTime > m.projectile.cooldown) { 
                    m.lastAttackTime=now; 
                    const mpEl = document.createElement('div'); 
                    mpEl.className=`monster-projectile ${m.projectile.type}`; 
                    mpEl.style.position='absolute'; 
                    monsterProjectiles.push({element:mpEl,x:m.x+m.element.offsetWidth/2,y:m.y+m.element.offsetHeight/2,target:castleTargetElement, ...m.projectile, targetCastleInfo: m.targetCastle}); 
                    gameArea.appendChild(mpEl); 
                } 
            } else { 
                if (m.x > tx) { 
                    m.x -= speed; 
                } else if (now - m.lastAttackTime > 1000) { 
                    m.lastAttackTime = now; 
                    if (b) { 
                        b.health -= m.damage; 
                        const hb = b.element.querySelector('.barricade-health-bar'); 
                        if(hb) hb.style.width=`${Math.max(0,b.health/b.maxHealth)*100}%`; 
                    } else if (!isGodMode) { 
                        if (m.targetCastle.isAI) { 
                            if (!isCastleAIDestroyed) castleHealthAI -= m.damage; 
                        } else { 
                            if (!isPlayerCastleDestroyed) castleHealth -= m.damage; 
                        } 
                    } 
                } 
            } 
            m.element.style.left = `${m.x}px`; 
            m.element.style.top = `${m.y}px`; 
        }
        monsterProjectiles.forEach((mp,i)=>{ const r=mp.target.getBoundingClientRect(), gr=gameArea.getBoundingClientRect(), tx=(r.left-gr.left)+r.width/2, ty=(r.top-gr.top)+r.height/2, dist=Math.hypot(tx-mp.x, ty-p.y); if(dist<mp.speed+5){if(!isGodMode){ if(mp.target===castleElement && !isPlayerCastleDestroyed){castleHealth-=mp.damage;} else if(mp.target===castleAIElement && !isCastleAIDestroyed){castleHealthAI-=mp.damage;} else {const b = barricades.find(bar=>bar.element===mp.target); if(b){b.health-=mp.damage; const hb=b.element.querySelector('.barricade-health-bar'); if(hb) hb.style.width=`${Math.max(0,b.health/b.maxHealth)*100}%`;}}} if(mp.element) mp.element.remove(); monsterProjectiles.splice(i,1);} else {mp.x+=(tx-mp.x)/dist*mp.speed; mp.y+=(ty-p.y)/dist*mp.speed; mp.element.style.left=`${mp.x}px`; mp.element.style.top=`${mp.y}px`;}});
        barricades=barricades.filter(b=>{if(b.health<=0&&b.element)b.element.remove();return b.health>0;});
        if (!isPlayerCastleDestroyed && castleHealth <= 0) { isPlayerCastleDestroyed = true; playerRespawnTimer = 30000; castleElement.classList.add('castle-destroyed'); playerRespawnTimerElement.style.display = 'flex'; }
        if (gameMode === 'ai' && !isCastleAIDestroyed && castleHealthAI <= 0) { isCastleAIDestroyed = true; aiRespawnTimer = 30000; castleAIElement.classList.add('castle-destroyed'); aiRespawnTimerElement.style.display = 'flex'; }
        updateCastleHealthDisplay(false); if(gameMode === 'ai') updateCastleHealthDisplay(true);
        const singlePlayerLost = gameMode === 'single' && castleHealth <= 0; const multiPlayerLost = gameMode === 'ai' && isPlayerCastleDestroyed && isCastleAIDestroyed; if (!isGameOver && (singlePlayerLost || multiPlayerLost)) { endGame("GAME OVER!"); }
        if (monstersSpawnedThisWave>=totalMonstersToSpawn && monsters.length === 0 && !isGameOver) { if (!isWaveClearMessageSent) { if (gameMode === 'ai') addChatMessage("IA", getRandomPhrase('waveEnd'), true); isWaveClearMessageSent = true; } startNextWave(); }
    }
    async function endGame(message) { isGameOver = true; clearInterval(gameLoopInterval); clearInterval(monsterSpawnInterval); clearInterval(aiLogicInterval); clearInterval(aiAttackInterval); castleAbilityIntervals.forEach(clearInterval); if(castleAbilityIntervalsAI) castleAbilityIntervalsAI.forEach(clearInterval); stopSocialPoll(); stopChatPoll(); logDebugMessage(`Fim de jogo: ${message}`, 'error'); const { trophiesGained, newTotalTrophies } = await updatePlayerStatsAndTrophies(); gameOverTitle.textContent = message; if (currentUser && !isDebugModeEnabled && !isGodMode) { postGameStats.innerHTML = `Estatísticas da Partida:<br>Dinheiro: $${money} | Diamantes: ${diamonds} | Onda: ${currentWave}<br>Troféus Ganhos: ${trophiesGained > 0 ? '+' : ''}${trophiesGained} 🏆<br>Total de Troféus: ${Math.floor(newTotalTrophies)} 🏆`; postGameStats.style.display = 'block'; } else { postGameStats.style.display = 'none'; } gameMessage.style.display = 'flex'; }
    function startGameLoop() { if (gameLoopInterval) clearInterval(gameLoopInterval); gameLoopInterval = setInterval(gameLoop, 1000 / 60); }
    function togglePause(forcePause = null) { isPaused = forcePause !== null ? forcePause : !isPaused; logDebugMessage(isPaused ? "Jogo Pausado" : "Jogo Retomado"); pauseButton.textContent = isPaused ? 'Continuar' : 'Pause'; if (isPaused) { clearInterval(gameLoopInterval); clearInterval(monsterSpawnInterval); } else { startGameLoop(); if (monstersSpawnedThisWave < totalMonstersToSpawn) monsterSpawnInterval = setInterval(() => { if(monstersSpawnedThisWave < totalMonstersToSpawn) spawnMonster(); else clearInterval(monsterSpawnInterval); }, 500); } if (placingBarricade) barricadeGhost.style.display = isPaused ? 'block' : 'none'; }
    function showIntroScreen() { introScreen.style.display = 'flex'; loadingScreen.style.display = 'none'; startScreen.style.display = 'none'; modScreen.style.display = 'none'; modEditorScreen.style.display = 'none'; multiplayerLobbyScreen.style.display = 'none'; modSelectionScreen.style.display = 'none'; gameContainer.style.display = 'block'; setTimeout(() => { introScreen.style.display = 'none'; showLoadingScreen(); }, 4000); }
    function showLoadingScreen() { loadingScreen.style.display = 'flex'; startScreen.style.display = 'none'; gameContainer.style.display = 'block'; setTimeout(() => { loadingScreen.style.display = 'none'; showStartScreen(); }, 1000); }
    function showStartScreen() { 
        gameMessage.style.display = 'none'; 
        startScreen.style.display = 'flex'; 
        modScreen.style.display = 'none'; 
        modEditorScreen.style.display = 'none'; 
        multiplayerLobbyScreen.style.display = 'none'; 
        modSelectionScreen.style.display = 'none'; 
        playerCastleIndicator.style.display = 'none'; 
        socialOverlay.style.display = 'none'; 
        dmGroupsOverlay.style.display = 'none'; 
        gameContainer.style.display = 'block'; 
        bobsInventoryToggleButton.style.display = 'none';
        renderSaveSlots(); 
    }

function showBobsMineScreen() {
    // Esconde a tela de início (ou outra tela ativa)
    startScreen.style.display = 'none';
    
    // Mostra a tela da Mina do Bob
    // O ideal é usar 'flex' se o layout usar flexbox, ou 'block'
    bobsMineScreen.style.display = 'flex'; 
}
    
    function showLobbyScreen() { if (!currentUser) { showCustomAlert("Você precisa estar logado para acessar o modo multiplayer."); return; } startScreen.style.display = 'none'; multiplayerLobbyScreen.style.display = 'flex'; }
    
    function renderModSelectionLists() {
        modSelectionList.innerHTML = '';
        const activeLocalMods = allMods.filter(m => m.active);
        if (activeLocalMods.length === 0) {
            modSelectionList.innerHTML = '<p style="text-align:center; color: #888;">Nenhum mod local ativo encontrado.</p>';
        } else {
            activeLocalMods.forEach(mod => {
                const item = document.createElement('div');
                item.className = 'mod-selection-item';
                item.innerHTML = `<input type="checkbox" id="mod-select-${mod.id}" data-mod-id="${mod.id}" checked><label for="mod-select-${mod.id}">[${mod.type.charAt(0).toUpperCase()}] ${mod.name}</label>`;
                modSelectionList.appendChild(item);
            });
        }
    
        modpackSelectionList.innerHTML = '';
        const activeModpacks = allModpacks.filter(p => p.active);
        if (activeModpacks.length === 0) {
            modpackSelectionList.innerHTML = '<p style="text-align:center; color: #888;">Nenhum modpack local ativo encontrado.</p>';
        } else {
            activeModpacks.forEach(pack => {
                const item = document.createElement('div');
                item.className = 'mod-selection-item';
                item.innerHTML = `<input type="radio" name="modpack-selection" id="modpack-select-${pack.id}" data-modpack-id="${pack.id}"><label for="modpack-select-${pack.id}">${pack.name} (${pack.mods.length} mods)</label>`;
                modpackSelectionList.appendChild(item);
            });
        }
    }

    // Esta função será chamada quando o botão de upgrade da mina for clicado
async function handleMineUpgrade() {
    // Primeiro, verificamos se o usuário está logado, pois os dados da mina são salvos na conta
    if (!currentUser) {
        await showCustomAlert("Você precisa estar logado para melhorar a mina.");
        return;
    }

    // Define os custos para cada nível de upgrade. Você pode ajustar esses valores.
    const upgradeCosts = {
        // Custo para ir do nível 1 para o 2
        1: 100, 
        // Custo para ir do nível 2 para o 3
        2: 500,  
        // Custo para ir do nível 3 para o 4
        3: 2000 
        // Adicione mais níveis se quiser
    };

    const currentLevel = currentUser.mineData.level || 1;
    const cost = upgradeCosts[currentLevel];

    // Verifica se existe um próximo nível para evoluir
    if (cost === undefined) {
        await showCustomAlert("Sua mina já está no nível máximo!");
        return;
    }

    // Verifica se o jogador tem "Bobs" suficientes
    if (bobs >= cost) {
        // Subtrai o custo
        bobs -= cost;
        // Aumenta o nível da mina
        currentUser.mineData.level++;

        // Atualiza a interface do usuário
        updateBobsDisplay(); 
        // (Opcional) Você pode querer criar uma função para atualizar a tela da mina também
        // updateMineScreen(); 

        await showCustomAlert(`Mina melhorada para o nível ${currentUser.mineData.level}!`);

        // Salva o progresso no servidor (importante!)
        const socialData = await fetchSocialData();
        if (socialData && socialData[currentUser.username.toLowerCase()]) {
            socialData[currentUser.username.toLowerCase()].mineData = currentUser.mineData;
            socialData[currentUser.username.toLowerCase()].bobs = bobs;
            await updateSocialData(socialData);
        }
    } else {
        // Se não tiver "Bobs" suficientes
        await showCustomAlert(`Você precisa de ${cost} Bobs para melhorar a mina.`);
    }
}

function showBobsShopScreen() {
    startScreen.style.display = 'none'; // Esconde a tela de início
    bobsShopScreen.style.display = 'flex'; // Mostra a tela da loja
    
    // É uma boa prática atualizar a loja sempre que ela é aberta
    renderBobsShopItems(); 
}

    // --- Funções para a Loja e Inventário do Bob ---

// Renderiza os itens na loja do Bob
function renderBobsShopItems() {
    bobsShopItemsContainer.innerHTML = ''; // Limpa a loja antes de adicionar os itens
    for (const id in BOBS_SHOP_ITEMS) {
        const item = BOBS_SHOP_ITEMS[id];
        const canAfford = bobs >= item.cost;
        const itemHTML = `
            <div class="bobs-shop-item">
                <div class="item-icon">${item.icon}</div>
                <div class="item-details">
                    <span class="item-name">${item.name}</span>
                    <span class="item-cost">${item.cost} Bobs</span>
                </div>
                <div class="item-actions">
                    <button class="mod-button secondary buy-spell-info-btn" data-spell-id="${id}">Info</button>
                    <button class="main-menu-button buy-spell-button" data-spell-id="${id}" ${canAfford ? '' : 'disabled'}>
                        Comprar
                    </button>
                </div>
            </div>
        `;
        bobsShopItemsContainer.innerHTML += itemHTML;
    }
}

// Função para comprar um feitiço/item
async function handleBuySpell(spellId) {
    if (!currentUser) {
        await showCustomAlert("Você precisa estar logado para comprar itens.");
        return;
    }
    const item = BOBS_SHOP_ITEMS[spellId];
    if (bobs >= item.cost) {
        bobs -= item.cost;

        // Adiciona o item ao inventário do jogador
        if (!currentUser.spellInventory) {
            currentUser.spellInventory = {};
        }
        currentUser.spellInventory[spellId] = (currentUser.spellInventory[spellId] || 0) + 1;

        updateBobsDisplay();
        renderBobsShopItems(); // Atualiza os botões da loja
        await showCustomAlert(`Você comprou: ${item.name}!`);

        // Salva os dados na nuvem
        const socialData = await fetchSocialData();
        if (socialData && socialData[currentUser.username.toLowerCase()]) {
            socialData[currentUser.username.toLowerCase()].bobs = bobs;
            socialData[currentUser.username.toLowerCase()].spellInventory = currentUser.spellInventory;
            await updateSocialData(socialData);
        }
    } else {
        await showCustomAlert("Bobs insuficientes!");
    }
}

// Mostra a janela de informações do item
function showSpellInfo(spellId) {
    const item = BOBS_SHOP_ITEMS[spellId];
    itemInfoTitle.textContent = item.name;
    itemInfoDescription.textContent = item.description;
    itemInfoUsage.textContent = `Como usar: ${item.usage}`;
    itemInfoModalOverlay.style.display = 'flex';
}

// Esconde a janela de informações
function hideSpellInfo() {
    itemInfoModalOverlay.style.display = 'none';
}

// Mostra ou esconde o inventário de itens do Bob
function toggleBobsInventory() {
    const isOpen = bobsInventoryPanel.classList.toggle('open');
    if (isOpen) {
        renderBobsInventory();
    }
}

// Renderiza os itens que o jogador possui no inventário
function renderBobsInventory() {
    bobsInventoryContent.innerHTML = '';
    if (!currentUser || !currentUser.spellInventory || Object.keys(currentUser.spellInventory).length === 0) {
        bobsInventoryContent.innerHTML = '<p style="text-align: center; color: #888;">Inventário vazio.</p>';
        return;
    }
    for (const spellId in currentUser.spellInventory) {
        const count = currentUser.spellInventory[spellId];
        if (count > 0) {
            const item = BOBS_SHOP_ITEMS[spellId];
            const card = document.createElement('div');
            card.className = 'inventory-item-card';
            card.dataset.spellId = spellId;
            card.dataset.spellType = item.type;
            card.innerHTML = `
                <div class="item-icon">${item.icon}</div>
                <div class="item-name">${item.name}</div>
                <div class="item-count">x${count}</div>
            `;
            bobsInventoryContent.appendChild(card);
        }
    }
}

// Lida com o clique em um item do inventário
async function handleInventoryItemClick(spellId, spellType) {
    const item = BOBS_SHOP_ITEMS[spellId];
    if (spellType === 'instant') {
        // Usa o item instantaneamente
        await executeInstantSpell(spellId);
    } else if (spellType === 'targeted') {
        // Entra no modo de mira para usar o item
        placingSpell = spellId;
        toggleBobsInventory(); // Fecha o inventário
        togglePause(true); // Pausa o jogo
        placementModeOverlay.style.display = 'flex';
        document.getElementById('placement-message').textContent = `Dê um clique duplo para usar ${item.name}!`;
        placementModeOverlay.style.cursor = 'crosshair';
    }
}

// Executa feitiços de efeito instantâneo (como poções)
async function executeInstantSpell(spellId) {
    if (!currentUser || !currentUser.spellInventory || !currentUser.spellInventory[spellId]) {
        return;
    }
     const effect = BOBS_SHOP_ITEMS[spellId].effect;
    
    // Lógica dos efeitos
    if (effect.type === 'rage_buff') {
        isRageActive = true;
        // Adiciona um efeito visual
        document.querySelectorAll('.guardian, .castle-soldier').forEach(g => g.classList.add('rage-active'));
        castleElement.classList.add('rage-active');
        
        // Define um temporizador para remover o efeito
        if (rageTimeout) clearTimeout(rageTimeout);
        rageTimeout = setTimeout(() => {
            isRageActive = false;
            document.querySelectorAll('.guardian, .castle-soldier').forEach(g => g.classList.remove('rage-active'));
            castleElement.classList.remove('rage-active');
        }, effect.duration);
    } else if (effect.type === 'max_health_increase') {
        MAX_CASTLE_HEALTH += effect.amount;
        castleHealth += effect.amount; // Também cura a mesma quantidade
        updateCastleHealthDisplay(false);
    }
    
    // Reduz a quantidade do item no inventário
    currentUser.spellInventory[spellId]--;
    renderBobsInventory();
    
    // Salva a alteração
    const socialData = await fetchSocialData();
    if (socialData && socialData[currentUser.username.toLowerCase()]) {
        socialData[currentUser.username.toLowerCase()].spellInventory = currentUser.spellInventory;
        await updateSocialData(socialData);
    }
}

// Executa feitiços que precisam de um alvo no mapa
async function executeTargetedSpell(spellId, event) {
    const r = gameContainer.getBoundingClientRect();
    const x = event.clientX - r.left;
    const y = event.clientY - r.top;
    const effect = BOBS_SHOP_ITEMS[spellId].effect;

    // Lógica dos efeitos de alvo
    if (effect.type === 'area_stun') {
        monsters.forEach(m => {
            const distSq = Math.pow((m.x + m.element.offsetWidth / 2) - x, 2) + Math.pow((m.y + m.element.offsetHeight / 2) - y, 2);
            if (distSq <= effect.radius * effect.radius) {
                damageMonster(m, effect.damage);
                m.stunnedUntil = Date.now() + effect.duration; // Atordoa o monstro
            }
        });
    } else if (effect.type === 'rain_damage') {
        // Lógica para chuva de flechas, etc.
    }

    // Sai do modo de mira
    placingSpell = null;
    placementModeOverlay.style.display = 'none';
    togglePause(false);

    // Reduz a quantidade do item no inventário
    currentUser.spellInventory[spellId]--;
    
    // Salva a alteração
    const socialData = await fetchSocialData();
    if (socialData && socialData[currentUser.username.toLowerCase()]) {
        socialData[currentUser.username.toLowerCase()].spellInventory = currentUser.spellInventory;
        await updateSocialData(socialData);
    }
}
    
    function showModSelectionScreen() {
        multiplayerLobbyScreen.style.display = 'none';
        modSelectionScreen.style.display = 'flex';
        renderModSelectionLists();
        modSelectionTabMods.click();
    }

    function startGame(mode, options = {}) { startScreen.style.display = 'none'; multiplayerLobbyScreen.style.display = 'none'; modSelectionScreen.style.display = 'none'; gameContainer.style.display = 'block'; initializeGame(mode, options); }
    function processCommand(commandStr) { 
        logDebugMessage(`> ${commandStr}`, 'command'); 
        const parts = commandStr.toLowerCase().split(' '); 
        const command = parts[0]; 
        const args = parts.slice(1); 
        switch(command) { 
            case 'money': 
                money = parseInt(args[0]) || money; 
                updateMoneyDisplay(); 
                logDebugMessage(`Dinheiro definido para $${money}`); 
                break; 
            case 'diamonds': 
                diamonds = parseInt(args[0]) || diamonds; 
                updateDiamondDisplay(); 
                logDebugMessage(`Diamantes definidos para ${diamonds}`); 
                break;
            case 'bobs':
                bobs = parseInt(args[0]) || bobs;
                updateBobsDisplay();
                logDebugMessage(`Bobs definidos para ${bobs}`);
                break;
            case 'wave': 
                const waveNum = parseInt(args[0]); 
                if(waveNum > 0) { 
                    monsters.forEach(m => m.element?.remove()); 
                    monsters = []; 
                    currentWave = waveNum - 1; 
                    startNextWave(); 
                    logDebugMessage(`Pulando para a onda ${waveNum}`); 
                } else { 
                    logDebugMessage('Uso: wave [número > 0]', 'error');
                } 
                break; 
            case 'spawn': 
                const monsterName = args[0] || ''; 
                const amount = parseInt(args[1]) || 1; 
                const monsterType = activeGameMonsterTypes.find(m => m.name.toLowerCase().includes(monsterName)); 
                if (monsterType) { 
                    for (let i = 0; i < amount; i++) { 
                        spawnMonster(monsterType.id); 
                    } 
                    logDebugMessage(`${amount}x ${monsterType.name} spawnado(s).`); 
                } else { 
                    logDebugMessage(`Monstro '${monsterName}' não encontrado.`, 'error'); 
                } 
                break; 
            case 'health': 
                const newHealth = parseInt(args[0]) || MAX_CASTLE_HEALTH; 
                castleHealth = newHealth; 
                if(gameMode === 'ai') castleHealthAI = parseInt(args[0]) || MAX_CASTLE_HEALTH_AI; 
                updateCastleHealthDisplay(false); 
                if(gameMode === 'ai') updateCastleHealthDisplay(true); 
                logDebugMessage(`Vida dos castelos definida para ${args[0]}.`); 
                break; 
            case 'god': 
                isGodMode = !isGodMode; 
                logDebugMessage(`Modo Deus ${isGodMode ? 'ATIVADO' : 'DESATIVADO'}.`, 'godmode'); 
                break; 
            case 'killall': 
                monsters.forEach(m => m.health = 0); 
                logDebugMessage(`Todos os monstros foram derrotados.`); 
                break; 
            case 'help': 
                logDebugMessage("Comandos: money, diamonds, bobs, wave, spawn, health, god, killall, help"); 
                break; 
            default: 
                logDebugMessage(`Comando '${command}' desconhecido.`, 'error'); 
                break; 
        } 
    }
    function getSaveGames() { try { const saves = localStorage.getItem('castleDefenseSaves'); return saves ? JSON.parse(saves) : []; } catch (e) { console.error("Erro ao ler jogos salvos:", e); localStorage.removeItem('castleDefenseSaves'); return []; } }
    function saveGameList(saves) { localStorage.setItem('castleDefenseSaves', JSON.stringify(saves)); }
    function renderSaveSlots() { const saves = getSaveGames(); saveSlotsContainer.innerHTML = ''; for (let i = 0; i < MAX_SAVE_SLOTS; i++) { const save = saves[i]; const slot = document.createElement('div'); slot.classList.add('save-slot'); if (save) { const healthPercent = (save.castleHealth / save.maxCastleHealth) * 100; slot.innerHTML = `<div class="save-slot-header"><span class="save-slot-name">${save.name}</span><div class="save-slot-wave">Onda ${save.currentWave}</div></div><div class="save-slot-stats"><span>$${save.money}</span><span>💎 ${save.diamonds}</span></div><div class="save-slot-progress-container"><div class="save-slot-progress-bar" style="width: ${healthPercent}%;"></div></div><button class="save-slot-delete-button" data-index="${i}">X</button>`; slot.dataset.index = i; } else { slot.classList.add('empty'); slot.textContent = `[ Jogo Vazio ${i + 1} ]`; } saveSlotsContainer.appendChild(slot); } }
    async function saveCurrentGame(saveIndex = -1) { 
        if (gameMode === 'ai') { 
            await showCustomAlert("Não é possível salvar jogos no modo Multiplayer."); 
            return; 
        } 
        let saves = getSaveGames(); 
        let saveName; 
        if (saveIndex !== -1 && saves[saveIndex]) { 
            saveName = saves[saveIndex].name; 
        } else { 
            if (saves.length >= MAX_SAVE_SLOTS) { 
                await showCustomAlert('Máximo de saves atingido!'); 
                return; 
            } 
            saveName = await showCustomPrompt("Nome para seu jogo salvo:", `Jogo ${saves.length + 1}`); 
            if (!saveName || saveName.trim() === '') return; 
        } 
        const gameState = { 
            name: saveName.trim(), 
            money, 
            diamonds, 
            currentWave, 
            castleHealth, 
            maxCastleHealth: MAX_CASTLE_HEALTH,
            isRageActive,
            rageEndTime: isRageActive ? Date.now() + rageTimeout._idleTimeout : null,
            currentCastleType, 
            currentCastleEvolution, 
            purchasedWeapons, 
            currentWeaponIndex, 
            guardianInventory, 
            guardianSlots, 
            barricades: barricades.map(b => ({ typeId: b.typeId, health: b.health, x: b.x, y: b.y })) 
        }; 
        if (saveIndex !== -1) { 
            saves[saveIndex] = gameState; 
            logDebugMessage(`Jogo "${saveName}" sobrescrito.`); 
        } else { 
            saves.push(gameState); 
        } 
        saveGameList(saves); 
        if (saveIndex === -1) { 
            await showCustomAlert(`Jogo "${saveName}" salvo!`); 
        } 
        renderSaveSlots(); 
    }
    function loadGameFromState(state) {
        money = state.money;
        diamonds = state.diamonds;
        bobs = state.bobs || 0;
        currentWave = state.currentWave - 1;
        purchasedWeapons = state.purchasedWeapons;
        currentWeaponIndex = state.currentWeaponIndex;
        guardianInventory = state.guardianInventory || [];
        guardianSlots = state.guardianSlots || [null, null, null];
        isGameOver = false;
        isPaused = false;
        updateCastle(state.currentCastleType, state.currentCastleEvolution, { loadedHealth: state.castleHealth, loadedMaxHealth: state.maxCastleHealth });
        if (state.barricades) {
            barricades = [];
            state.barricades.forEach(bData => {
                const type = activeGameBarricadeTypes.find(t => t.id === bData.typeId);
                if (type) {
                    placeBarricade(type, { x: bData.x, y: bData.y, health: bData.health });
                }
            });
        }
        if (state.isRageActive && state.rageEndTime > Date.now()) {
            const remainingDuration = state.rageEndTime - Date.now();
            executeInstantSpell('rage'); // Reativa a fúria
            clearTimeout(rageTimeout);
            rageTimeout = setTimeout(() => {
                isRageActive = false;
                document.querySelectorAll('.guardian, .castle-soldier').forEach(g => g.classList.remove('rage-active'));
                castleElement.classList.remove('rage-active');
            }, remainingDuration);
        }
        updateGuardianVisuals();
        updateGuardianPanel();
        updateCastleHealthDisplay(false);
        updateDiamondDisplay();
        updateBobsDisplay();
        updateMoneyDisplay();
        startNextWave();
    }
    
    // --- Event Listeners ---
    enableDebugButton.addEventListener('click', () => { isDebugModeEnabled = !isDebugModeEnabled; enableDebugButton.textContent = `Debug: ${isDebugModeEnabled ? 'ON' : 'OFF'}`; enableDebugButton.classList.toggle('active', isDebugModeEnabled); });
    toggleLogButton.addEventListener('click', () => { debugLogOverlay.style.display = debugLogOverlay.style.display === 'flex' ? 'none' : 'flex'; });
    closeLogButton.addEventListener('click', () => { debugLogOverlay.style.display = 'none'; });
    sendCommandButton.addEventListener('click', () => { if (commandInput.value) { processCommand(commandInput.value); commandInput.value = ''; } });
    commandInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && commandInput.value) { processCommand(commandInput.value); commandInput.value = ''; } });
    helpButton.addEventListener('click', () => { commandHelpOverlay.style.display = 'flex'; });
    closeHelpButton.addEventListener('click', () => { commandHelpOverlay.style.display = 'none'; });
    gameArea.addEventListener('click', (e) => { 
        if (isGameOver || isPaused || placingBarricade || placingSpell) return; 
        const clicked = monsters.find(m => { if(!m.element) return false; const rect = m.element.getBoundingClientRect(); return e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom; }); 
        shootProjectile(clicked); 
    });
    gameContainer.addEventListener('mousemove', (e) => { 
        if (placingBarricade) { 
            const r = gameContainer.getBoundingClientRect(); 
            barricadeGhost.style.left = `${e.clientX - r.left}px`; 
            barricadeGhost.style.top = `${e.clientY - r.top}px`; 
        }
        if (placingSpell) {
            const r = gameContainer.getBoundingClientRect();
            const spell = BOBS_SHOP_ITEMS[placingSpell];
            placementReticle.style.left = `${e.clientX - r.left}px`;
            placementReticle.style.top = `${e.clientY - r.top}px`;
            placementReticle.style.width = `${spell.effect.radius * 2}px`;
            placementReticle.style.height = `${spell.effect.radius * 2}px`;
            placementReticle.style.display = 'block';
        } else {
            placementReticle.style.display = 'none';
        }
    });
    document.querySelector('#shop-content-wrapper').addEventListener('click', (e) => { const button = e.target.closest('.buy-button'); if (button) { const type = button.dataset.itemType; const id = button.dataset.itemId; if (type === 'weapon') { const weaponId = parseInt(id); if (purchasedWeapons[weaponId]) { currentWeaponIndex = weaponId; } else if (money >= weapons[weaponId].cost) { money -= weapons[weaponId].cost; purchasedWeapons[weaponId] = true; currentWeaponIndex = weaponId; } } else if (type === 'barricade') { const barricadeType = activeGameBarricadeTypes.find(b => b.id === id); if (barricadeType && money >= barricadeType.cost) { prepareBarricadePlacement(barricadeType); } } else if (type === 'special') { const item = specialItems[id]; if (item && diamonds >= item.cost) { const needsHeal = (!isPlayerCastleDestroyed && castleHealth < MAX_CASTLE_HEALTH) || (gameMode === 'ai' && !isCastleAIDestroyed && castleHealthAI < MAX_CASTLE_HEALTH_AI); if (needsHeal) { diamonds -= item.cost; if (!isPlayerCastleDestroyed) castleHealth = MAX_CASTLE_HEALTH; if (gameMode === 'ai' && !isCastleAIDestroyed) castleHealthAI = MAX_CASTLE_HEALTH_AI; logDebugMessage('Vida recuperada!', 'purchase'); updateDiamondDisplay(); updateCastleHealthDisplay(false); if (gameMode === 'ai') updateCastleHealthDisplay(true); } } } updateMoneyDisplay(); } const guardianBuyBtn = e.target.closest('.guardian-buy-btn:not(:disabled)'); if (guardianBuyBtn) { const typeId = guardianBuyBtn.dataset.typeId; const type = activeGameGuardianTypes[typeId]; if (money >= type.evolutions[0].cost) { money -= type.evolutions[0].cost; guardianInventory.push({ typeId: typeId, level: 1, lastAttackTime: 0 }); logDebugMessage(`${type.name} comprado.`, 'purchase'); updateMoneyDisplay(); } } });
    castleShopContainer.addEventListener('click', (e) => { const mainBtn = e.target.closest('.castle-main-btn'); const evoBtn = e.target.closest('.castle-evo-btn:not(:disabled)'); const item = e.target.closest('.castle-shop-item'); if (!item || item.classList.contains('disabled')) return; const castleId = item.dataset.castleId; if (mainBtn) { if (castleId !== currentCastleType) { const newCastleInfo = castles[castleId][0]; const cost = newCastleInfo.cost || 0; const costType = newCastleInfo.costType || 'money'; let canAfford = false; if (costType === 'diamond') { if (diamonds >= cost) { diamonds -= cost; canAfford = true; } } else { if (money >= cost) { money -= cost; canAfford = true; } } if (canAfford) { logDebugMessage(`Castelo trocado para: ${newCastleInfo.name}`, 'purchase'); updateCastle(castleId, 0, { isAI: false }); } } } else if (evoBtn) {  evolveCurrentCastle(false);  } });
    guardianUiToggleButton.addEventListener('click', () => guardianManagementPanel.classList.toggle('open'));
    closeGuardianPanelButton.addEventListener('click', () => guardianManagementPanel.classList.remove('open'));
    guardianManagementPanel.addEventListener('click', e => { const inventoryCard = e.target.closest('.guardian-card'); const slotCard = e.target.closest('.guardian-slot'); const evolveBtn = e.target.closest('.guardian-evolve-btn'); if (evolveBtn) { e.stopPropagation(); const inventoryIndex = parseInt(evolveBtn.dataset.inventoryIndex); const guardian = guardianInventory[inventoryIndex]; const type = activeGameGuardianTypes[guardian.typeId]; if (!type.isCustom && guardian.level < 4) { const nextEvo = type.evolutions[guardian.level]; if (money >= nextEvo.cost) { money -= nextEvo.cost; guardian.level++; logDebugMessage(`${type.name} evoluído para Nv. ${guardian.level}!`, 'purchase'); updateMoneyDisplay(); } } } else if (inventoryCard) { const index = parseInt(inventoryCard.dataset.inventoryIndex); selectedGuardianInventoryIndex = (selectedGuardianInventoryIndex === index) ? null : index; updateGuardianPanel(); } else if (slotCard) { if (selectedGuardianInventoryIndex !== null) { const slotIndex = parseInt(slotCard.dataset.slotIndex); if (selectedGuardianInventoryIndex >= guardianInventory.length) { selectedGuardianInventoryIndex = null; updateGuardianPanel(); return; } const guardianToEquip = guardianInventory.splice(selectedGuardianInventoryIndex, 1)[0]; if (guardianSlots[slotIndex]) guardianInventory.push(guardianSlots[slotIndex]); guardianSlots[slotIndex] = guardianToEquip; selectedGuardianInventoryIndex = null; updateGuardianPanel(); updateGuardianVisuals(); logDebugMessage(`Guardião movido para o slot ${slotIndex + 1}.`);
            }
        }
    });
    cancelPlacementButton.addEventListener('click', exitBarricadePlacementMode);
    restartButton.addEventListener('click', () => startGame(gameMode));
    backToMenuButton.addEventListener('click', showStartScreen);
    newGameButton.addEventListener('click', () => startGame('single'));
    pauseButton.addEventListener('click', () => togglePause());
    shopToggleButton.addEventListener('click', () => { if (placingBarricade) return; const isExp = gameUI.classList.toggle('expanded'); gameUI.classList.toggle('collapsed', !isExp); shopToggleButton.textContent = isExp ? 'Fechar Loja' : 'Loja'; if (gameMode === 'ai') chatEmoteContainer.style.display = isExp ? 'none' : 'flex'; });
    backToMenuNavButton.addEventListener('click', async () => { const playerIsPlaying = !isGameOver && currentWave > 0; if (playerIsPlaying) { if (loadedSaveSlotIndex !== null) { await saveCurrentGame(loadedSaveSlotIndex); } else if (gameMode === 'single') { const wantToSave = await showCustomConfirm("Deseja salvar seu progresso antes de sair?"); if (wantToSave) await saveCurrentGame(); } else { const wantToLeave = await showCustomConfirm("Tem certeza que quer voltar ao menu? O progresso da partida será perdido."); if (!wantToLeave) return; } } clearInterval(gameLoopInterval); clearInterval(monsterSpawnInterval); clearInterval(aiLogicInterval); clearInterval(aiAttackInterval); stopSocialPoll(); stopChatPoll(); showStartScreen(); });
    savePanelToggle.addEventListener('click', () => savedGamesPanel.classList.toggle('collapsed'));
    saveSlotsContainer.addEventListener('click', async e => { const slot = e.target.closest('.save-slot:not(.empty)'); const deleteBtn = e.target.closest('.save-slot-delete-button'); if (deleteBtn) { e.stopPropagation(); const index = parseInt(deleteBtn.dataset.index); let saves = getSaveGames(); const wantToDelete = await showCustomConfirm(`Tem certeza que deseja apagar o jogo "${saves[index].name}"?`); if (wantToDelete) { saves.splice(index, 1); saveGameList(saves); renderSaveSlots(); } } else if (slot) { const index = parseInt(slot.dataset.index); const saves = getSaveGames(); if (saves[index]) { startGame('single', {savedState: saves[index], saveIndex: index}); } } });
    const commands = [ { cmd: 'money 50000', desc: 'Adiciona X de dinheiro.' }, { cmd: 'diamonds 200', desc: 'Adiciona X de diamante.' }, { cmd: 'bobs 1000', desc: 'Adiciona X de Bobs.' }, { cmd: 'wave 15', desc: 'Pula para a onda desejada.' }, { cmd: 'spawn zumbi 10', desc: 'Exemplo: Spawna 10 zumbis.' }, { cmd: 'health 999', desc: 'Define a vida do castelo para o número desejado.' }, { cmd: 'god', desc: 'Ativa/Desativa a invencibilidade.' }, { cmd: 'killall', desc: 'Derrota todos os monstros.' }, { cmd: 'help', desc: 'Mostra esta lista de ajuda.' } ];
    commandHelpContent.innerHTML = '<h3>Lista de Comandos</h3>';
    commands.forEach(c => { const entry = document.createElement('div'); entry.className = 'command-entry'; entry.innerHTML = `<div class="command-desc"><code>${c.cmd.split(' ')[0]}</code> - ${c.desc}</div><button class="copy-command-btn" data-command="${c.cmd}"><div class="clipboard-icon"></div><span class="copied-icon">✓</span></button>`; commandHelpContent.appendChild(entry); });
    document.querySelectorAll('.copy-command-btn').forEach(btn => { btn.addEventListener('click', (e) => { const button = e.currentTarget; const commandToCopy = button.dataset.command; navigator.clipboard.writeText(commandToCopy).then(() => { const clipboardIcon = button.querySelector('.clipboard-icon'); const copiedIcon = button.querySelector('.copied-icon'); clipboardIcon.style.display = 'none'; copiedIcon.style.display = 'inline'; setTimeout(() => { clipboardIcon.style.display = 'block'; copiedIcon.style.display = 'none'; }, 1000); }); }); });
    toggleFullscreenButton.addEventListener('click', () => { if (!document.fullscreenElement) { gameContainer.requestFullscreen().catch(err => { showCustomAlert(`Não foi possível entrar em tela cheia: ${err.message}`); }); } else { document.exitFullscreen(); } });
    modsButton.addEventListener('click', () => { startScreen.style.display = 'none'; modScreen.style.display = 'flex'; loadMods(); loadModpacks(); renderModList(); renderModpackList(); renderOnlineHub(); switchModManagerTab('local'); });
    backToMenuFromModsButton.addEventListener('click', showStartScreen);
    createNewButton.addEventListener('click', async () => { if (currentModTab === 'local') { modScreen.style.display = 'none'; modEditorScreen.style.display = 'flex'; initializeModEditor(); } else { await openModpackEditor(); } });
    cancelModCreationButton.addEventListener('click', () => { modEditorScreen.style.display = 'none'; modScreen.style.display = 'flex'; renderModList(); });
    addModButton.addEventListener('click', async () => { const code = modCodeInput.value.trim(); if (!code) return showCustomAlert('Por favor, cole um código de mod.'); try { const jsonString = atob(code); const modData = JSON.parse(jsonString); if (!modData.id || !modData.type || !modData.name) throw new Error("Código de mod inválido."); if (allMods.some(m => m.id === modData.id)) return showCustomAlert('Um mod com este ID já existe!'); allMods.push(modData); saveMods(); renderModList(); modCodeInput.value = ''; await showCustomAlert(`Mod "${modData.name}" adicionado!`); } catch (error) { await showCustomAlert('Erro ao adicionar o mod. Código inválido. \n' + error.message); } });
    modListContainer.addEventListener('click', async (e) => { const check = e.target.closest('.mod-toggle-check'); const delBtn = e.target.closest('.mod-delete-btn'); const publishBtn = e.target.closest('.mod-publish-btn'); if (check) { const index = parseInt(check.dataset.index); if (allMods[index]) { allMods[index].active = check.checked; saveMods(); } } else if (delBtn) { const index = parseInt(delBtn.dataset.index); if (allMods[index]) { const wantToDelete = await showCustomConfirm(`Deseja excluir o mod "${allMods[index].name}"?`); if(wantToDelete) { allMods.splice(index, 1); saveMods(); renderModList(); } } } else if (publishBtn) { const index = parseInt(publishBtn.dataset.index); await publishMod(index); } });
    modTabLocal.addEventListener('click', () => switchModManagerTab('local'));
    modTabPacks.addEventListener('click', () => switchModManagerTab('packs'));
    cancelModpackCreationButton.addEventListener('click', () => { modpackEditorOverlay.style.display = 'none'; currentModpackEditing = null; });
    saveModpackButton.addEventListener('click', saveModpack);
    modpackListContainer.addEventListener('click', async (e) => { const check = e.target.closest('.modpack-toggle-check'); const delBtn = e.target.closest('.modpack-delete-btn'); const editBtn = e.target.closest('.modpack-edit-btn'); const publishBtn = e.target.closest('.modpack-publish-btn'); if(check) { const index = parseInt(check.dataset.index); if(allModpacks[index]) { allModpacks[index].active = check.checked; saveModpacks(); } } else if (delBtn) { const index = parseInt(delBtn.dataset.index); if(allModpacks[index]) { const wantToDelete = await showCustomConfirm(`Deseja excluir o modpack "${allModpacks[index].name}"?`); if(wantToDelete) { allModpacks.splice(index, 1); saveModpacks(); renderModpackList(); } } } else if (editBtn) { const index = parseInt(editBtn.dataset.index); await openModpackEditor(index); } else if (publishBtn) { const index = parseInt(publishBtn.dataset.index); await publishModpack(index); } });
    document.querySelector('#mod-editor-screen .editor-tabs').addEventListener('click', (e) => { const tab = e.target.closest('.editor-tab'); if (tab) switchEditorTab(tab.dataset.type); });
    colorPalette.addEventListener('click', (e) => { const colorBox = e.target.closest('.color-box'); if (colorBox) { editorCurrentColor = colorBox.dataset.color; document.querySelectorAll('#color-palette .color-box').forEach(b => b.classList.remove('selected')); colorBox.classList.add('selected'); } });
    pencilToolBtn.addEventListener('click', () => { editorCurrentTool = 'pencil'; pencilToolBtn.classList.add('selected'); bucketToolBtn.classList.remove('selected'); eraserToolBtn.classList.remove('selected'); });
    bucketToolBtn.addEventListener('click', () => { editorCurrentTool = 'bucket'; bucketToolBtn.classList.add('selected'); pencilToolBtn.classList.remove('selected'); eraserToolBtn.classList.remove('selected'); });
    eraserToolBtn.addEventListener('click', () => { editorCurrentTool = 'eraser'; eraserToolBtn.classList.add('selected'); pencilToolBtn.classList.remove('selected'); bucketToolBtn.classList.remove('selected'); });
    pixelGrid.addEventListener('mousedown', (e) => { isDrawing = true; if (!e.target.classList.contains('pixel')) return; if (editorCurrentTool === 'pencil') { e.target.style.backgroundColor = editorCurrentColor; } else if (editorCurrentTool === 'eraser') { e.target.style.backgroundColor = 'transparent'; } else if (editorCurrentTool === 'bucket') { const index = Array.from(pixelGrid.children).indexOf(e.target); const startX = index % editorGridSize.width; const startY = Math.floor(index / editorGridSize.width); const targetColor = e.target.style.backgroundColor || 'transparent'; (function floodFill(startX, startY, targetColor, replacementColor) { if (targetColor === replacementColor) return; const pixels = Array.from(pixelGrid.children); const w = editorGridSize.width, h = editorGridSize.height; const q = [[startX, startY]]; while(q.length > 0) { const [x, y] = q.shift(); if (x < 0 || x >= w || y < 0 || y >= h) continue; const index = y * w + x; if (pixels[index].style.backgroundColor === targetColor) { pixels[index].style.backgroundColor = replacementColor; q.push([x + 1, y]); q.push([x - 1, y]); q.push([x, y + 1]); q.push([x, y - 1]); } } })(startX, startY, targetColor, editorCurrentColor); } });
    pixelGrid.addEventListener('mouseover', (e) => { if (!isDrawing || !e.target.classList.contains('pixel')) return; if (editorCurrentTool === 'pencil') { e.target.style.backgroundColor = editorCurrentColor; } else if (editorCurrentTool === 'eraser') { e.target.style.backgroundColor = 'transparent'; } });
    document.addEventListener('mouseup', () => { isDrawing = false; });
    addMonsterToWaveBtn.addEventListener('click', () => { const entryDiv = document.createElement('div'); entryDiv.className = 'wave-monster-entry'; const select = document.createElement('select'); populateMonsterDropdown(select); const input = document.createElement('input'); input.type = 'number'; input.value = '5'; input.min = '1'; const removeBtn = document.createElement('button'); removeBtn.className = 'mod-button danger'; removeBtn.textContent = 'X'; removeBtn.style.fontSize = '0.7em'; removeBtn.style.padding = '2px 6px'; removeBtn.onclick = () => entryDiv.remove(); entryDiv.append(select, ' Qtd: ', input, removeBtn); waveMonsterList.appendChild(entryDiv); });
    saveModButton.addEventListener('click', async () => { const modData = { id: `custom_${Date.now()}`, type: editorCurrentType, active: true }; try { const getNumValue = (id, f) => { const i = document.getElementById(id); if (!i) throw new Error(`Input não encontrado para ${f}`); const v = parseFloat(i.value); if (isNaN(v)) throw new Error(`'${f}' precisa ser um número.`); return v; }; modData.name = document.getElementById('mod-name').value.trim(); if (!modData.name) throw new Error("O nome é obrigatório."); if (modData.type !== 'wave') { modData.pixelData = Array.from(document.querySelectorAll('#pixel-grid .pixel')).map(p => p.style.backgroundColor || 'transparent'); modData.gridWidth = editorGridSize.width; modData.gridHeight = editorGridSize.height; modData.width = getNumValue('mod-width', 'Largura'); modData.height = getNumValue('mod-height', 'Altura'); if (modData.width <= 0 || modData.height <= 0) throw new Error("Largura/Altura devem ser > 0."); } if (modData.type === 'monster') { modData.health = getNumValue('mod-health', 'Vida'); modData.damage = getNumValue('mod-damage', 'Dano'); modData.speed = getNumValue('mod-speed', 'Velocidade'); modData.money = getNumValue('mod-money', 'Dinheiro'); modData.spawnWaves = document.getElementById('mod-spawnWaves').value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n) && n > 0); if(modData.spawnWaves.length === 0) throw new Error("Insira ondas válidas."); modData.spawnCount = getNumValue('mod-spawnCount', 'Quantidade'); modData.isFlying = document.getElementById('mod-isFlying').value === 'true'; } else if (modData.type === 'guardian') { modData.cost = getNumValue('mod-cost', 'Custo'); modData.damage = getNumValue('mod-damage', 'Dano'); modData.cooldown = getNumValue('mod-cooldown', 'Cooldown'); modData.range = getNumValue('mod-range', 'Alcance'); modData.projectileSpeed = getNumValue('mod-projectileSpeed', 'Vel. Projétil'); modData.projectileSize = getNumValue('mod-projectileSize', 'Tam. Projétil'); modData.projectileColor = document.getElementById('mod-projectileColor').value; } else if (modData.type === 'barricade') { modData.cost = getNumValue('mod-cost', 'Custo'); modData.health = getNumValue('mod-health', 'Vida'); } else if (modData.type === 'wave') { modData.waveNumber = getNumValue('mod-waveNumber', 'Número da Onda'); if (modData.waveNumber <= 0) throw new Error("Número da onda deve ser > 0."); modData.spawns = Array.from(document.querySelectorAll('.wave-monster-entry')).map(entry => { const monsterId = entry.querySelector('select').value; const count = parseInt(entry.querySelector('input').value); return (monsterId && !isNaN(count) && count > 0) ? { monsterId, count } : null; }).filter(s => s !== null); if (modData.spawns.length === 0) throw new Error("Adicione monstros à onda.");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               } 
            newlyCreatedMod = modData; 
            modCodeTextarea.value = btoa(JSON.stringify(modData)); 
            modCodeDisplayOverlay.style.display = 'flex'; 
        } catch (error) { 
            await showCustomAlert(error.message); 
            console.error(error); 
        } 
    });
    copyModCodeBtn.addEventListener('click', () => { navigator.clipboard.writeText(modCodeTextarea.value).then(() => { copyModCodeBtn.textContent = 'Copiado!'; setTimeout(() => { copyModCodeBtn.textContent = 'Copiar Código'; }, 1500); }); });
    addNewlyCreatedModBtn.addEventListener('click', () => { if (newlyCreatedMod) { if (!allMods.some(m => m.id === newlyCreatedMod.id)) { allMods.push(newlyCreatedMod); saveMods(); } newlyCreatedMod = null; modCodeDisplayOverlay.style.display = 'none'; modEditorScreen.style.display = 'none'; modScreen.style.display = 'flex'; renderModList(); } });
    closeCodePanelBtn.addEventListener('click', () => { newlyCreatedMod = null; modCodeDisplayOverlay.style.display = 'none'; });
    onlinePanelToggle.addEventListener('click', () => onlineModsPanel.classList.toggle('collapsed'));
    onlineModSearch.addEventListener('input', renderOnlineHub);
    onlineModSort.addEventListener('change', renderOnlineHub);
    onlineModList.addEventListener('click', e => { const addBtn = e.target.closest('.online-mod-add-btn'); const copyBtn = e.target.closest('.online-mod-copy-btn'); const editBtn = e.target.closest('.online-mod-edit-btn'); const deleteBtn = e.target.closest('.online-mod-delete-btn'); const addPackBtn = e.target.closest('.online-pack-add-btn'); if (addBtn) { modCodeInput.value = addBtn.dataset.code; addModButton.click(); const modId = addBtn.dataset.modId; if(modId) incrementModUsageCount(modId); } if (copyBtn) { navigator.clipboard.writeText(copyBtn.dataset.code).then(() => { copyBtn.textContent = 'Copiado!'; setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 1500); }); } if (editBtn) { editOnlineMod(editBtn.dataset.code, editBtn.dataset.name); } if (deleteBtn) { handleDeleteOnlineMod(deleteBtn.dataset.modId); } if (addPackBtn) { handleAddOnlineModpack(addPackBtn.dataset.packId); } });
    document.getElementById('hub-tab-mods').addEventListener('click', () => { document.getElementById('hub-tab-packs').classList.remove('active'); document.getElementById('hub-tab-mods').classList.add('active'); renderOnlineHub(); });
    document.getElementById('hub-tab-packs').addEventListener('click', () => { document.getElementById('hub-tab-mods').classList.remove('active'); document.getElementById('hub-tab-packs').classList.add('active'); renderOnlineHub(); });
    playWithAIButton.addEventListener('click', showModSelectionScreen);
    backToMenuFromLobbyButton.addEventListener('click', showStartScreen);
    backToLobbyFromModSelectionButton.addEventListener('click', showLobbyScreen);
    
    startAIGameWithModsButton.addEventListener('click', () => {
        const isModsTabActive = modSelectionTabMods.classList.contains('active');
        let gameOptions = {};
    
        if (isModsTabActive) {
            gameOptions.selectedModIds = Array.from(document.querySelectorAll('#mod-selection-list input:checked')).map(input => input.dataset.modId);
        } else {
            const selectedPackRadio = document.querySelector('#modpack-selection-list input:checked');
            if (selectedPackRadio) {
                gameOptions.selectedModpackIds = [selectedPackRadio.dataset.modpackId];
            }
        }
    
        startGame('ai', gameOptions);
    });

    modSelectionTabMods.addEventListener('click', () => {
        modSelectionTabPacks.classList.remove('active');
        modSelectionTabMods.classList.add('active');
        modpackSelectionListContainer.classList.remove('active');
        modSelectionListContainer.classList.add('active');
    });

    modSelectionTabPacks.addEventListener('click', () => {
        modSelectionTabMods.classList.remove('active');
        modSelectionTabPacks.classList.add('active');
        modSelectionListContainer.classList.remove('active');
        modpackSelectionListContainer.classList.add('active');
    });

    chatToggleButton.addEventListener('click', () => chatPanel.classList.toggle('hidden'));
    emoteToggleButton.addEventListener('click', () => { emotePicker.style.display = emotePicker.style.display === 'flex' ? 'none' : 'flex'; });
    document.addEventListener('click', e => { if (!emotePicker.contains(e.target) && !emoteToggleButton.contains(e.target)) emotePicker.style.display = 'none'; });
    emotePicker.addEventListener('click', e => { if(e.target.classList.contains('emote')) { const emote = e.target.textContent; showNotificationBubble(emote, 'emote'); triggerAIEmoteReaction(emote); emotePicker.style.display = 'none'; } });
    chatInput.addEventListener('keydown', e => { if (e.key === 'Enter' && chatInput.value.trim() !== '') { addChatMessage('Player', chatInput.value.trim(), false); chatInput.value = ''; } });
    
    socialProfileButton.addEventListener('click', () => {
        socialOverlay.style.display = 'flex';
        if (currentUser) {
            friendsPanel.style.display = 'block';
            authPanel.style.display = 'none';
            renderFriendsPanel();
        } else {
            friendsPanel.style.display = 'none';
            authPanel.style.display = 'block';
            toggleAuthMode(false);
        }
    });
    multiplayerButton.addEventListener('click', () => {
        if (!currentUser) {
            socialOverlay.style.display = 'flex';
            friendsPanel.style.display = 'none';
            authPanel.style.display = 'block';
            toggleAuthMode(true);
        } else { 
            showLobbyScreen(); 
        }
    });
    document.querySelectorAll('.social-panel-close-button').forEach(btn => btn.addEventListener('click', () => { socialOverlay.style.display = 'none'; dmGroupsOverlay.style.display = 'none'; }));
    authToggleLink.addEventListener('click', () => toggleAuthMode());
    authSubmitButton.addEventListener('click', () => { const username = authUsernameInput.value.trim(); const password = authPasswordInput.value; if (isAuthPanelInLoginMode) { handleLogin(username, password); } else { handleCreateAccount(username, password); } });
    logoutButton.addEventListener('click', handleLogout);
    addFriendButton.addEventListener('click', handleSendFriendRequest);
    friendsListContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-friend-btn');
        const messageBtn = e.target.closest('.message-friend-btn');
        if (removeBtn) { handleRemoveFriend(removeBtn.dataset.friendName); }
        if (messageBtn) { openDmGroupsPanel(); openChatView('dm', messageBtn.dataset.friendName); }
    });
    notificationAcceptBtn.addEventListener('click', () => {
        if (currentNotification.type === 'friendRequest') { handleFriendRequestResponse(currentNotification.data, true); }
        if (currentNotification.type === 'groupInvite') { handleGroupInviteResponse(currentNotification.data, true); }
    });
    notificationDeclineBtn.addEventListener('click', () => {
        if (currentNotification.type === 'friendRequest') { handleFriendRequestResponse(currentNotification.data, false); }
        if (currentNotification.type === 'groupInvite') { handleGroupInviteResponse(currentNotification.data, false); }
    });
    
    dmListContainer.addEventListener('click', (e) => { const item = e.target.closest('.dm-list-item'); if(item) openChatView('dm', item.dataset.friendName); });
    groupListContainer.addEventListener('click', (e) => { const item = e.target.closest('.group-list-item'); if(item) openChatView('group', item.dataset.groupId); });
    chatBackButton.addEventListener('click', closeChatView);
    chatViewSendBtn.addEventListener('click', handleSendMessage);
    chatViewInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSendMessage(); });
    showCreateGroupBtn.addEventListener('click', openCreateGroupPanel);
    createGroupConfirmBtn.addEventListener('click', handleCreateGroup);
    
    bobsMineButton.addEventListener('click', showBobsMineScreen);
    backToMenuFromMine.addEventListener('click', showStartScreen);
    upgradeMineButton.addEventListener('click', handleMineUpgrade);
    bobsShopButton.addEventListener('click', showBobsShopScreen);
    backToMenuFromShop.addEventListener('click', showStartScreen);

    bobsShopItemsContainer.addEventListener('click', e => {
        const buyButton = e.target.closest('.buy-spell-button:not(.disabled)');
        const infoButton = e.target.closest('.buy-spell-info-btn');
        if (buyButton) {
            handleBuySpell(buyButton.dataset.spellId);
        }
        if (infoButton) {
            showSpellInfo(infoButton.dataset.spellId);
        }
    });

    bobsInventoryToggleButton.addEventListener('click', toggleBobsInventory);
    closeBobsInventoryButton.addEventListener('click', toggleBobsInventory);
    itemInfoCloseButton.addEventListener('click', hideSpellInfo);

    bobsInventoryContent.addEventListener('click', e => {
        const card = e.target.closest('.inventory-item-card');
        if (card) {
            handleInventoryItemClick(card.dataset.spellId, card.dataset.spellType);
        }
    });
    
    placementModeOverlay.addEventListener('dblclick', (e) => {
        if (placingSpell) {
            executeTargetedSpell(placingSpell, e);
        } else if (placingBarricade) {
            placeBarricadeAtClick(e);
        }
    });

    async function checkAutoLogin() {
        const storedUser = localStorage.getItem('castleDefenseUser');
        if (storedUser) {
            try {
                const { username, password } = JSON.parse(storedUser);
                if (username && password) await handleLogin(username, password);
            } catch (e) { console.error("Erro no auto-login", e); localStorage.removeItem('castleDefenseUser'); }
        }
        updateUiForLogin();
    }

    function initializeDefaultModpacks() {
        const allDefaultMods = [
            ...NIGHTMARE_MODS,
            ...GOLD_RUSH_MODS,
            ...CYBER_SIEGE_MODS,
            ...ELEMENTAL_FURY_MODS
        ];

        allDefaultMods.forEach(mod => {
            if (!allMods.some(m => m.id === mod.id)) {
                allMods.push(mod);
            }
        });
        saveMods();

        const allDefaultModpacks = [
            NIGHTMARE_MODPACK,
            GOLD_RUSH_MODPACK,
            CYBER_SIEGE_MODPACK,
            ELEMENTAL_FURY_MODPACK
        ];

        allDefaultModpacks.forEach(pack => {
            if (!allModpacks.some(p => p.id === pack.id)) {
                allModpacks.push(pack);
            }
        });
        saveModpacks();
    }

    // --- Inicialização ---
    loadMods();
    loadModpacks();
    initializeDefaultModpacks();
    showIntroScreen();
    checkAutoLogin();
});
