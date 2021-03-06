export const URL = {
    BASE_URL: process.env.REACT_APP_BASE_URL,
    SIGN_IN_URL: `${process.env.REACT_APP_BASE_URL}/auth/login`,
    SIGN_UP_URL: `${process.env.REACT_APP_BASE_URL}/auth/register`,
    SET_UP_PROVIDER_PAYPAL: `${process.env.REACT_APP_BASE_URL}/payment/setup?provider=paypal`,
    PAYMENT_CREATE_ORDER: `${process.env.REACT_APP_BASE_URL}/payment/create-order`,
    PAYMENT_EXECUTE_ORDER: `${process.env.REACT_APP_BASE_URL}/payment/execute-order`,
    GET_USER_DATA: `${process.env.REACT_APP_BASE_URL}/users/info`,
    GET_ALL_TOURNAMENTS: `${process.env.REACT_APP_BASE_URL}/payment/tournaments`,
    GET_MY_TOURNAMENTS: `${process.env.REACT_APP_BASE_URL}/users/tournaments`,
    INVITE_TEAMMATE: `${process.env.REACT_APP_BASE_URL}/users/invite-teammate`
}

export const tableHead: string[] = [
    'division', 
    'Tournament date', 
    'price', 
    'Teams', 
    'game', 
    'game mode',
    'registration',
];

export const usaStates: string[] = [ 
    "AK - Alaska", 
    "AL - Alabama", 
    "AR - Arkansas", 
    "AS - American Samoa", 
    "AZ - Arizona", 
    "CA - California", 
    "CO - Colorado", 
    "CT - Connecticut", 
    "DC - District of Columbia", 
    "DE - Delaware", 
    "FL - Florida", 
    "GA - Georgia", 
    "GU - Guam", 
    "HI - Hawaii", 
    "IA - Iowa", 
    "ID - Idaho", 
    "IL - Illinois", 
    "IN - Indiana", 
    "KS - Kansas", 
    "KY - Kentucky", 
    "LA - Louisiana", 
    "MA - Massachusetts", 
    "MD - Maryland", 
    "ME - Maine", 
    "MI - Michigan", 
    "MN - Minnesota", 
    "MO - Missouri", 
    "MS - Mississippi", 
    "MT - Montana", 
    "NC - North Carolina", 
    "ND - North Dakota", 
    "NE - Nebraska", 
    "NH - New Hampshire", 
    "NJ - New Jersey", 
    "NM - New Mexico", 
    "NV - Nevada", 
    "NY - New York", 
    "OH - Ohio", 
    "OK - Oklahoma", 
    "OR - Oregon", 
    "PA - Pennsylvania", 
    "PR - Puerto Rico", 
    "RI - Rhode Island", 
    "SC - South Carolina", 
    "SD - South Dakota", 
    "TN - Tennessee", 
    "TX - Texas", 
    "UT - Utah", 
    "VA - Virginia", 
    "VI - Virgin Islands", 
    "VT - Vermont", 
    "WA - Washington", 
    "WI - Wisconsin", 
    "WV - West Virginia", 
    "WY - Wyoming"
];