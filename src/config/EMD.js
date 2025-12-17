// Entity Metadata Configuration Class
class EMD {
    constructor(model = {}) {
        this.model = model;
    }
}

EMD.DEFAULT_IMAGE_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/logo480.png';
EMD.WELCOME_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115847.webp';
EMD.HELP_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115939.webp';
EMD.ABOUT_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070537.webp';
EMD.MATH_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115604.webp';
EMD.SUPPORT_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109120015.webp';
EMD.THANK_YOU_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115743.webp';
EMD.YOU_GOT_IT_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070739.webp';
EMD.BIG_TIME_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070720.webp';
EMD.PEACH_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115654.webp';
EMD.HAVE_A_NICE_DAY_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070956.webp';
EMD.I_AM_THINKING_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115627.webp';
EMD.WAIT_FOR_IT_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070537.webp';
EMD.YES_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070629.webp';
EMD.PAY_ATTENTION_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190528070905.webp';
EMD.KISS_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115813.webp';
EMD.CHEERS_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115847.webp';
EMD.BLINK_IMG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/bitmoji-20190109115905.webp';
EMD.LOGO_PNG_URL = 'https://raw.githubusercontent.com/ilanlal/basic-telegram-bot-remastered/main/assets/logo480.png';
EMD.GIT_REPO_URL = 'https://github.com/ilanlal/addon4gas';

EMD.Home = {
    entityName: 'Home',
    card: (data = {}) => {
        return {
            name: 'homeCard',
            header:
            {
                title: '🏠 Home',
                subTitle: 'Welcome to your home',
                imageUrl: EMD.DEFAULT_IMAGE_URL,
                imageStyle: CardService.ImageStyle.SQUARE,
                imageAltText: 'Home Image'
            },
            sections: [
                {   // TextButton to show terminal output sheet with welcome message
                    collapsible: false,
                    numUncollapsibleWidgets: 0,
                    widgets: [
                        {  // Welcome widget
                            id: 'welcome_text_paragraph',
                            TextParagraph: {
                                text: 'Welcome to the Addon! Use the menu to navigate through different sections.'
                            }
                        },
                        {  // DecoratedText with TextButton to show terminal output sheet
                            id: 'show_terminal_output_button',
                            DecoratedText: {
                                text: '💻 Terminal Output',
                                bottomLabel: 'View the terminal output log sheet',
                                wrapText: false,
                                textButton: {
                                    disabled: false,
                                    text: '💻',
                                    onClick: {
                                        functionName: 'SpreadsheetHandler.Addon.onInsertSampleDataClick',
                                        parameters: { card: 'EMD.Spreadsheet.TerminalOutput' }
                                    }
                                }
                            }
                        },
                        {  // DecoratedText with TextButton to push 'Help' card
                            id: 'basic_bot_operation_button',
                            DecoratedText: {
                                text: '❓ Need Help?',
                                bottomLabel: 'Click \'❓\' to open the Help card',
                                wrapText: false,
                                textButton: {
                                    disabled: false,
                                    text: '❓',
                                    onClick: {
                                        functionName: 'CardHandler.Controller.onPushCardClick',
                                        parameters: { card: 'EMD.Cards.Help' }
                                    }
                                }
                            }
                        }
                    ]
                },
                { // Data view
                    header: 'Data View',
                    collapsible: true,
                    numUncollapsibleWidgets: 0,
                    widgets: [
                        {   // Data View widget
                            id: 'data_view_widget',
                            TextParagraph: {
                                text: `Data: ${JSON.stringify(data, null, 2)}`,
                                maxLines: 35
                            }
                        }
                    ]
                }
            ]
        };
    }
}

EMD.Help = {
    entityName: 'Help',
    card: (data = {}) => {
        return {
            name: 'help_Card',
            header: {
                title: 'Help & Support',
                subTitle: 'Get help and support for this Addon.',
                imageUrl: EMD.HELP_IMG_URL,
                imageStyle: CardService.ImageStyle.SQUARE,
                imageAltText: 'Help Image'
            },
            sections: [
                {
                    // header: 'Help & Support',
                    widgets: [
                        {
                            id: 'help_text_paragraph',
                            TextParagraph: {
                                text: 'If you need assistance, please contact our support team or visit our help center.'
                            }
                        }
                    ]
                },
                {   // Data view
                    header: 'Data View',
                    collapsible: true,
                    numUncollapsibleWidgets: 0,
                    widgets: [
                        {   // Data View widget
                            id: 'data_view_widget',
                            TextParagraph: {
                                text: `Data: ${JSON.stringify(data, null, 2)}`,
                                maxLines: 35
                            }
                        }
                    ]
                }
            ]
        };
    }
}

EMD.About = {
    entityName: 'About',
    card: (data = {}) => {
        return {
            name: 'about_Card',
            header: {
                title: 'About This Addon',
                subTitle: 'Learn more about this Addon.',
                imageUrl: EMD.I_AM_THINKING_IMG_URL,
                imageStyle: CardService.ImageStyle.SQUARE,
                imageAltText: 'About Image'
            },
            sections: [
                {
                    // header: 'About This Addon',
                    widgets: [
                        {
                            id: 'about_text_paragraph',
                            TextParagraph: {
                                text: 'This addon is designed to help you manage your tasks efficiently.'
                            }
                        },
                        { // Version Info widget
                            id: 'version_info_widget',
                            TextParagraph: {
                                text: `Version: ${data.packageInfo?.version || 'N/A'} (Build: ${data.packageInfo?.build || 'N/A'})`
                            }
                        }
                    ]
                },
                {   // Data view
                    header: 'Data View',
                    collapsible: true,
                    numUncollapsibleWidgets: 0,
                    widgets: [
                        {   // Data View widget
                            id: 'data_view_widget',
                            TextParagraph: {
                                text: `Data: ${JSON.stringify(data, null, 2)}`,
                                maxLines: 35
                            }
                        }
                    ]
                }
            ]
        };
    }
}

EMD.Account = {
    entityName: 'Account',
    card: (data = {}) => {
        return {
            name: 'account_Card',
            header: {
                title: 'Account Management',
                subTitle: 'Manage your account settings and preferences.',
                imageUrl: EMD.BLINK_IMG_URL,
                imageStyle: CardService.ImageStyle.SQUARE,
                imageAltText: 'Account Image'
            },
            sections: [
                {
                    // header: 'Account Management',
                    widgets: [
                        {
                            id: 'account_text_paragraph',
                            TextParagraph: {
                                text: 'Manage your account settings and preferences here.'
                            }
                        },
                        { // user Info widget
                            id: 'user_info_widget',
                            TextParagraph: {
                                text: `User is ${data.userInfo?.isPremium ? 'a Premium' : 'a Free'} user.`
                            }
                        }
                    ]
                },
                {   // Data view
                    header: 'Data View',
                    collapsible: true,
                    numUncollapsibleWidgets: 0,
                    widgets: [
                        {   // Data View widget
                            id: 'data_view_widget',
                            TextParagraph: {
                                text: `Data: ${JSON.stringify(data, null, 2)}`,
                                maxLines: 35
                            }
                        }
                    ]
                }
            ]
        };
    }
}

EMD.Logger = {
    entityName: 'eventLog',
    sheet: (data = {}) => {
        return {
            name: '📜 Event Log',
            columns: ['Created On', 'DC', 'Action', 'chat_id', 'content', 'event', 'note'],
            sample_data: []
        };
    }
}

EMD.TerminalOutput = {
    entityName: 'TerminalOutput',
    sheet: (data = {}) => {
        return {
            name: '💻 Terminal Output',
            columns: ['Timestamp', 'Source', 'Message', 'Details', 'More Info'],
            sample_data: [
                [new Date().toISOString(), 'server', 'Hi there! This is your terminal output log.', 'No details', 'N/A']
            ]
        };
    }
}


EMD.Cards = {
    Home: EMD.Home.card,
    Account: EMD.Account.card,
    Help: EMD.Help.card,
    About: EMD.About.card
}

EMD.Spreadsheet = {
    Logger: EMD.Logger.sheet,
    TerminalOutput: EMD.TerminalOutput.sheet
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EMD };
}