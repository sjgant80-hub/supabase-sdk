# @ai-native-solutions/supabase-sdk

Sovereign wrapper for **Supabase** · Database + Auth + Storage

**100 endpoints** wrapped from OpenAPI spec.

## Install
```bash
npm install @ai-native-solutions/supabase-sdk
```

## Use
```js
import Supabase from '@ai-native-solutions/supabase-sdk';
const client = new Supabase({ apiKey: process.env.SUPABASE_KEY });
```

## Endpoints (100)
- `GET /v1/branches/{branch_id_or_ref}` · Get database branch config
- `PATCH /v1/branches/{branch_id_or_ref}` · Update database branch config
- `DELETE /v1/branches/{branch_id_or_ref}` · Delete a database branch
- `POST /v1/branches/{branch_id_or_ref}/push` · Pushes a database branch
- `POST /v1/branches/{branch_id_or_ref}/merge` · Merges a database branch
- `POST /v1/branches/{branch_id_or_ref}/reset` · Resets a database branch
- `POST /v1/branches/{branch_id_or_ref}/restore` · Restore a scheduled branch deletion
- `GET /v1/branches/{branch_id_or_ref}/diff` · [Beta] Diffs a database branch
- `GET /v1/projects` · List all projects
- `POST /v1/projects` · Create a project
- `GET /v1/projects/available-regions` · [Beta] Gets the list of available regions that can be used for a new project
- `GET /v1/organizations` · List all organizations
- `POST /v1/organizations` · Create an organization
- `GET /v1/oauth/authorize` · [Beta] Authorize user through oauth
- `POST /v1/oauth/token` · [Beta] Exchange auth code for user's access and refresh token
- `POST /v1/oauth/revoke` · [Beta] Revoke oauth app authorization and it's corresponding tokens
- `GET /v1/oauth/authorize/project-claim` · Authorize user through oauth and claim a project
- `GET /v1/snippets` · Lists SQL snippets for the logged in user
- `GET /v1/snippets/{id}` · Gets a specific SQL snippet
- `GET /v1/profile` · Gets the user's profile
_...and 80 more_

## License
MIT · Copyright 2026 AI-Native Solutions

## Upstream
- Docs: https://supabase.com/docs/reference/api
- Homepage: https://supabase.com
