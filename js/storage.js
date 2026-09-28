const STORAGE_KEY = 'conviver-inscricoes';

export function getApplications() {
    const savedApplications = localStorage.getItem(STORAGE_KEY);

    if (!savedApplications) {
        return [];
    }

    try {
        const applications = JSON.parse(savedApplications);
        return Array.isArray(applications) ? applications : [];
    } catch {
        return [];
    }
}

export function saveApplication(application) {
    const applications = getApplications();
    applications.push(application);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}