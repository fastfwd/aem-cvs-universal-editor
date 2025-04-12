export function getValueByPath(obj, path) {
    if (!path) return undefined;
    const keys = path.split('/').filter(Boolean);

    return keys.reduce((acc, key) => acc && acc[key], obj);
}

export function splitAemPath(urn) {
    const prefix = 'urn:aemconnection:';
    if (!urn.startsWith(prefix)) return {basePath: undefined, jcrPath: undefined};

    const path = urn.slice(prefix.length);
    const parts = path.split('/').filter(Boolean);

    const jcrIndex = parts.findIndex(part => part.startsWith('jcr:'));
    if (jcrIndex === -1) return {basePath: undefined, jcrPath: undefined};

    const basePath = '/' + parts.slice(0, jcrIndex).join('/');
    const jcrPath = '/' + parts.slice(jcrIndex).join('/');

    return {basePath, jcrPath};
}