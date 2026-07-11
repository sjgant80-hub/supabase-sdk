/**
 * supabase-sdk · sovereign wrapper for Supabase
 * Database + Auth + Storage
 *
 * Auto-generated from OpenAPI spec · 2026-07-11
 * 100 endpoints wrapped · spec version 1.0.0
 *
 * Docs (upstream): https://supabase.com/docs/reference/api
 * Homepage: https://supabase.com
 */

export class Supabase {
  constructor({ apiKey, baseURL = 'https://supabase.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** GET /v1/branches/{branch_id_or_ref} · Get database branch config */
  async v1GetABranchConfig(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/branches/{branch_id_or_ref} · Update database branch config */
  async v1UpdateABranchConfig(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/branches/{branch_id_or_ref} · Delete a database branch */
  async v1DeleteABranch(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/branches/{branch_id_or_ref}/push · Pushes a database branch */
  async v1PushABranch(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}/push'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/branches/{branch_id_or_ref}/merge · Merges a database branch */
  async v1MergeABranch(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}/merge'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/branches/{branch_id_or_ref}/reset · Resets a database branch */
  async v1ResetABranch(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}/reset'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/branches/{branch_id_or_ref}/restore · Restore a scheduled branch deletion */
  async v1RestoreABranch(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}/restore'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/branches/{branch_id_or_ref}/diff · [Beta] Diffs a database branch */
  async v1DiffABranch(params = {}) {
    let path = '/v1/branches/{branch_id_or_ref}/diff'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects · List all projects */
  async v1ListAllProjects(params = {}) {
    let path = '/v1/projects'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects · Create a project */
  async v1CreateAProject(params = {}) {
    let path = '/v1/projects'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/available-regions · [Beta] Gets the list of available regions that can be used for a new project */
  async v1GetAvailableRegions(params = {}) {
    let path = '/v1/projects/available-regions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/organizations · List all organizations */
  async v1ListAllOrganizations(params = {}) {
    let path = '/v1/organizations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/organizations · Create an organization */
  async v1CreateAnOrganization(params = {}) {
    let path = '/v1/organizations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/oauth/authorize · [Beta] Authorize user through oauth */
  async v1AuthorizeUser(params = {}) {
    let path = '/v1/oauth/authorize'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/oauth/token · [Beta] Exchange auth code for user's access and refresh token */
  async v1ExchangeOauthToken(params = {}) {
    let path = '/v1/oauth/token'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/oauth/revoke · [Beta] Revoke oauth app authorization and it's corresponding tokens */
  async v1RevokeToken(params = {}) {
    let path = '/v1/oauth/revoke'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/oauth/authorize/project-claim · Authorize user through oauth and claim a project */
  async v1OauthAuthorizeProjectClaim(params = {}) {
    let path = '/v1/oauth/authorize/project-claim'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/snippets · Lists SQL snippets for the logged in user */
  async v1ListAllSnippets(params = {}) {
    let path = '/v1/snippets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/snippets/{id} · Gets a specific SQL snippet */
  async v1GetASnippet(params = {}) {
    let path = '/v1/snippets/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/profile · Gets the user's profile */
  async v1GetProfile(params = {}) {
    let path = '/v1/profile'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/actions · List all action runs */
  async v1ListActionRuns(params = {}) {
    let path = '/v1/projects/{ref}/actions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/actions/{run_id} · Get the status of an action run */
  async v1GetActionRun(params = {}) {
    let path = '/v1/projects/{ref}/actions/{run_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/actions/{run_id}/status · Update the status of an action run */
  async v1UpdateActionRunStatus(params = {}) {
    let path = '/v1/projects/{ref}/actions/{run_id}/status'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/actions/{run_id}/logs · Get the logs of an action run */
  async v1GetActionRunLogs(params = {}) {
    let path = '/v1/projects/{ref}/actions/{run_id}/logs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/api-keys · Get project api keys */
  async v1GetProjectApiKeys(params = {}) {
    let path = '/v1/projects/{ref}/api-keys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/api-keys · Creates a new API key for the project */
  async v1CreateProjectApiKey(params = {}) {
    let path = '/v1/projects/{ref}/api-keys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/api-keys/legacy · Check whether JWT based legacy (anon, service_role) API keys are enabled. This API endpoint will be  */
  async v1GetProjectLegacyApiKeys(params = {}) {
    let path = '/v1/projects/{ref}/api-keys/legacy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /v1/projects/{ref}/api-keys/legacy · Disable or re-enable JWT based legacy (anon, service_role) API keys. This API endpoint will be remov */
  async v1UpdateProjectLegacyApiKeys(params = {}) {
    let path = '/v1/projects/{ref}/api-keys/legacy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/api-keys/{id} · Get API key */
  async v1GetProjectApiKey(params = {}) {
    let path = '/v1/projects/{ref}/api-keys/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/api-keys/{id} · Updates an API key for the project */
  async v1UpdateProjectApiKey(params = {}) {
    let path = '/v1/projects/{ref}/api-keys/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/api-keys/{id} · Deletes an API key for the project */
  async v1DeleteProjectApiKey(params = {}) {
    let path = '/v1/projects/{ref}/api-keys/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/branches · List all database branches */
  async v1ListAllBranches(params = {}) {
    let path = '/v1/projects/{ref}/branches'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/branches · Create a database branch */
  async v1CreateABranch(params = {}) {
    let path = '/v1/projects/{ref}/branches'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/branches · Disables preview branching */
  async v1DisablePreviewBranching(params = {}) {
    let path = '/v1/projects/{ref}/branches'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/branches/{name} · Get a database branch */
  async v1GetABranch(params = {}) {
    let path = '/v1/projects/{ref}/branches/{name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/custom-hostname · [Beta] Gets project's custom hostname config */
  async v1GetHostnameConfig(params = {}) {
    let path = '/v1/projects/{ref}/custom-hostname'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/custom-hostname · [Beta] Deletes a project's custom hostname configuration */
  async v1DeleteHostnameConfig(params = {}) {
    let path = '/v1/projects/{ref}/custom-hostname'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/custom-hostname/initialize · [Beta] Updates project's custom hostname configuration */
  async v1UpdateHostnameConfig(params = {}) {
    let path = '/v1/projects/{ref}/custom-hostname/initialize'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/custom-hostname/reverify · [Beta] Attempts to verify the DNS configuration for project's custom hostname configuration */
  async v1VerifyDnsConfig(params = {}) {
    let path = '/v1/projects/{ref}/custom-hostname/reverify'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/custom-hostname/activate · [Beta] Activates a custom hostname for a project. */
  async v1ActivateCustomHostname(params = {}) {
    let path = '/v1/projects/{ref}/custom-hostname/activate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/jit-access · [Beta] Get project's temporary access configuration. */
  async v1GetJitAccessConfig(params = {}) {
    let path = '/v1/projects/{ref}/jit-access'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /v1/projects/{ref}/jit-access · [Beta] Update project's temporary access configuration. */
  async v1UpdateJitAccessConfig(params = {}) {
    let path = '/v1/projects/{ref}/jit-access'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/network-bans/retrieve · [Beta] Gets project's network bans */
  async v1ListAllNetworkBans(params = {}) {
    let path = '/v1/projects/{ref}/network-bans/retrieve'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/network-bans/retrieve/enriched · [Beta] Gets project's network bans with additional information about which databases they affect */
  async v1ListAllNetworkBansEnriched(params = {}) {
    let path = '/v1/projects/{ref}/network-bans/retrieve/enriched'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/network-bans · [Beta] Remove network bans. */
  async v1DeleteNetworkBans(params = {}) {
    let path = '/v1/projects/{ref}/network-bans'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/network-restrictions · [Beta] Gets project's network restrictions */
  async v1GetNetworkRestrictions(params = {}) {
    let path = '/v1/projects/{ref}/network-restrictions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/network-restrictions · [Alpha] Updates project's network restrictions by adding or removing CIDRs */
  async v1PatchNetworkRestrictions(params = {}) {
    let path = '/v1/projects/{ref}/network-restrictions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/network-restrictions/apply · [Beta] Updates project's network restrictions */
  async v1UpdateNetworkRestrictions(params = {}) {
    let path = '/v1/projects/{ref}/network-restrictions/apply'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/pgsodium · [Beta] Gets project's pgsodium config */
  async v1GetPgsodiumConfig(params = {}) {
    let path = '/v1/projects/{ref}/pgsodium'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /v1/projects/{ref}/pgsodium · [Beta] Updates project's pgsodium config. Updating the root_key can cause all data encrypted with th */
  async v1UpdatePgsodiumConfig(params = {}) {
    let path = '/v1/projects/{ref}/pgsodium'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/postgrest · Gets project's postgrest config */
  async v1GetPostgrestServiceConfig(params = {}) {
    let path = '/v1/projects/{ref}/postgrest'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/postgrest · Updates project's postgrest config */
  async v1UpdatePostgrestServiceConfig(params = {}) {
    let path = '/v1/projects/{ref}/postgrest'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref} · Gets a specific project that belongs to the authenticated user */
  async v1GetProject(params = {}) {
    let path = '/v1/projects/{ref}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref} · Updates the given project */
  async v1UpdateAProject(params = {}) {
    let path = '/v1/projects/{ref}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref} · Deletes the given project */
  async v1DeleteAProject(params = {}) {
    let path = '/v1/projects/{ref}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/secrets · List all secrets */
  async v1ListAllSecrets(params = {}) {
    let path = '/v1/projects/{ref}/secrets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/secrets · Bulk create secrets */
  async v1BulkCreateSecrets(params = {}) {
    let path = '/v1/projects/{ref}/secrets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/secrets · Bulk delete secrets */
  async v1BulkDeleteSecrets(params = {}) {
    let path = '/v1/projects/{ref}/secrets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/ssl-enforcement · [Beta] Get project's SSL enforcement configuration. */
  async v1GetSslEnforcementConfig(params = {}) {
    let path = '/v1/projects/{ref}/ssl-enforcement'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /v1/projects/{ref}/ssl-enforcement · [Beta] Update project's SSL enforcement configuration. */
  async v1UpdateSslEnforcementConfig(params = {}) {
    let path = '/v1/projects/{ref}/ssl-enforcement'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/types/typescript · Generate TypeScript types */
  async v1GenerateTypescriptTypes(params = {}) {
    let path = '/v1/projects/{ref}/types/typescript'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/vanity-subdomain · [Beta] Gets current vanity subdomain config */
  async v1GetVanitySubdomainConfig(params = {}) {
    let path = '/v1/projects/{ref}/vanity-subdomain'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/vanity-subdomain · [Beta] Deletes a project's vanity subdomain configuration */
  async v1DeactivateVanitySubdomainConfig(params = {}) {
    let path = '/v1/projects/{ref}/vanity-subdomain'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/vanity-subdomain/check-availability · [Beta] Checks vanity subdomain availability */
  async v1CheckVanitySubdomainAvailability(params = {}) {
    let path = '/v1/projects/{ref}/vanity-subdomain/check-availability'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/vanity-subdomain/activate · [Beta] Activates a vanity subdomain for a project. */
  async v1ActivateVanitySubdomainConfig(params = {}) {
    let path = '/v1/projects/{ref}/vanity-subdomain/activate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/upgrade · [Beta] Upgrades the project's Postgres version */
  async v1UpgradePostgresVersion(params = {}) {
    let path = '/v1/projects/{ref}/upgrade'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/upgrade/eligibility · [Beta] Returns the project's eligibility for upgrades */
  async v1GetPostgresUpgradeEligibility(params = {}) {
    let path = '/v1/projects/{ref}/upgrade/eligibility'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/upgrade/status · [Beta] Gets the latest status of the project's upgrade */
  async v1GetPostgresUpgradeStatus(params = {}) {
    let path = '/v1/projects/{ref}/upgrade/status'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/readonly · Returns project's readonly mode status */
  async v1GetReadonlyModeStatus(params = {}) {
    let path = '/v1/projects/{ref}/readonly'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/readonly/temporary-disable · Disables project's readonly mode for the next 15 minutes */
  async v1DisableReadonlyModeTemporarily(params = {}) {
    let path = '/v1/projects/{ref}/readonly/temporary-disable'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/read-replicas/setup · [Beta] Set up a read replica */
  async v1SetupAReadReplica(params = {}) {
    let path = '/v1/projects/{ref}/read-replicas/setup'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/read-replicas/remove · [Beta] Remove a read replica */
  async v1RemoveAReadReplica(params = {}) {
    let path = '/v1/projects/{ref}/read-replicas/remove'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/health · Gets project's service health status */
  async v1GetServicesHealth(params = {}) {
    let path = '/v1/projects/{ref}/health'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/config/auth/signing-keys/legacy · Get the signing key information for the JWT secret imported as signing key for this project. This en */
  async v1GetLegacySigningKey(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys/legacy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/config/auth/signing-keys/legacy · Set up the project's existing JWT secret as an in_use JWT signing key. This endpoint will be removed */
  async v1CreateLegacySigningKey(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys/legacy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/config/auth/signing-keys · List all signing keys for the project */
  async v1GetProjectSigningKeys(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/config/auth/signing-keys · Create a new signing key for the project in standby status */
  async v1CreateProjectSigningKey(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/config/auth/signing-keys/{id} · Get information about a signing key */
  async v1GetProjectSigningKey(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/config/auth/signing-keys/{id} · Update a signing key, mainly its status */
  async v1UpdateProjectSigningKey(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/config/auth/signing-keys/{id} · Remove a signing key from a project. Only possible if the key has been in revoked status for a while */
  async v1RemoveProjectSigningKey(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/signing-keys/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/config/auth · Gets project's auth config */
  async v1GetAuthServiceConfig(params = {}) {
    let path = '/v1/projects/{ref}/config/auth'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/config/auth · Updates a project's auth config */
  async v1UpdateAuthServiceConfig(params = {}) {
    let path = '/v1/projects/{ref}/config/auth'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/config/auth/third-party-auth · Lists all third-party auth integrations */
  async v1ListProjectTpaIntegrations(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/third-party-auth'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/config/auth/third-party-auth · Creates a new third-party auth integration */
  async v1CreateProjectTpaIntegration(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/third-party-auth'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id} · Get a third-party integration */
  async v1GetProjectTpaIntegration(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id} · Removes a third-party auth integration */
  async v1DeleteProjectTpaIntegration(params = {}) {
    let path = '/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/pause · Pauses the given project */
  async v1PauseAProject(params = {}) {
    let path = '/v1/projects/{ref}/pause'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/restart · Restarts the given project */
  async v1RestartAProject(params = {}) {
    let path = '/v1/projects/{ref}/restart'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/restore · Lists available restore versions for the given project */
  async v1ListAvailableRestoreVersions(params = {}) {
    let path = '/v1/projects/{ref}/restore'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/restore · Restores the given project */
  async v1RestoreAProject(params = {}) {
    let path = '/v1/projects/{ref}/restore'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/restore/cancel · Cancels the given project restoration */
  async v1CancelAProjectRestoration(params = {}) {
    let path = '/v1/projects/{ref}/restore/cancel'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/billing/addons · List billing addons and compute instance selections */
  async v1ListProjectAddons(params = {}) {
    let path = '/v1/projects/{ref}/billing/addons'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /v1/projects/{ref}/billing/addons · Apply or update billing addons, including compute instance size */
  async v1ApplyProjectAddon(params = {}) {
    let path = '/v1/projects/{ref}/billing/addons'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/billing/addons/{addon_variant} · Remove billing addons or revert compute instance sizing */
  async v1RemoveProjectAddon(params = {}) {
    let path = '/v1/projects/{ref}/billing/addons/{addon_variant}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/claim-token · Gets project claim token */
  async v1GetProjectClaimToken(params = {}) {
    let path = '/v1/projects/{ref}/claim-token'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/projects/{ref}/claim-token · Creates project claim token */
  async v1CreateProjectClaimToken(params = {}) {
    let path = '/v1/projects/{ref}/claim-token'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/projects/{ref}/claim-token · Revokes project claim token */
  async v1DeleteProjectClaimToken(params = {}) {
    let path = '/v1/projects/{ref}/claim-token'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/advisors/performance · Gets project performance advisors. */
  async v1GetPerformanceAdvisors(params = {}) {
    let path = '/v1/projects/{ref}/advisors/performance'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/advisors/security · Gets project security advisors. */
  async v1GetSecurityAdvisors(params = {}) {
    let path = '/v1/projects/{ref}/advisors/security'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/projects/{ref}/analytics/endpoints/logs.all · Gets project's logs */
  async v1GetProjectLogsAll(params = {}) {
    let path = '/v1/projects/{ref}/analytics/endpoints/logs.all'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('supabase ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }
}

export default Supabase;
