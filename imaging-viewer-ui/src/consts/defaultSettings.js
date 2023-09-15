const DEFAULT_SETTINGS = {
    'app.region': { label: 'EU West (Ireland)', value: 'eu-west-1' },
    'app.controlPlaneEndpointOverride': '',
    'app.dataPlaneEndpointOverride': '',
    'app.apiTiming': { label: 'Off', value: false },
    'viewer.tlmProxyUrl': '',
    'viewer.tlmProxyAuth': {
        label: 'Cognito JWT',
        value: 'cognito_jwt',
    },
    'viewer.imageFrameOverrideUrl': '',
    'viewer.imageFrameOverrideAuth': {
        label: 'Cognito JWT',
        value: 'cognito_jwt',
    },
};

export { DEFAULT_SETTINGS };
