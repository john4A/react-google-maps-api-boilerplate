import * as config from '../component/config'
export const getMarkerIcon = x => {
    switch (x) {
        case 1: return config.CRITICAL_MARKER_URL
        case 2: return config.WARNING_MARKER_URL
        default: return;
    }
}

export const getClusterIcon = x => {
    switch (x) {
        case 1: return config.CRITICAL_CLUSTER_URL
        case 2: return config.WARNING_CLUSTER_URL
        default: return;
    }
}