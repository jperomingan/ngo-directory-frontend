import api from 'utils/api';
import { retrieveUserCredential } from 'utils/auth'

const headers = { headers: { Authorization: `Bearer ${retrieveUserCredential().access_token}` } }

export function allOrganizations() {
    return api.get(`/organizations`, headers);
}