import api from 'utils/api'

export function user_login(data) {
    return api.post(`/user/login/`, data);
}

export function user_signup(data) {
    return api.post(`/user`, data);
}

export function managedOrganizationByUser(user_id) {
    return api.get(`/user/${user_id}/organization`)
}