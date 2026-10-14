# HOMEmind (HOMEMIND_ORANGE)

Smart platform for managing and maintaining home and company equipment, connecting users with technicians, with AI-assisted troubleshooting before a technician is requested.

This repository is the **static frontend**. JavaScript is used for animation only; all logic (authentication, data, alerts, calculations, payments) belongs to the .NET backend.

## Structure

- `html/` – pages (user, technician, company, admin, policies)
- `html/management/` – maintenance history, warranty center, repair vs replace
- `css/` – one stylesheet per page area (`workspace.css` is shared by company, technician and admin pages)
- `js/` – animation scripts only

## Roles

| Role | Entry pages |
|------|-------------|
| Individual | `dashboard.html`, `my-devices.html`, `ai-assistant.html`, `live-dispatch.html` |
| Technician | `technician-dashboard.html`, `technician-requests.html` |
| Company | `company-dashboard.html`, `company-equipment.html`, `company-reports.html` |
| Admin | `admin-dashboard.html` |

## Backend hand-off notes

- Every form control has a `name` attribute; the forms currently post to static `.html` pages and their `action` must be pointed at backend endpoints.
- Login and sign-up use `method="post"` so passwords never appear in the URL.
- Values on the pages (counts, costs, notification badge, dates) are placeholders to be replaced by server data.
- Needed on the backend: warranty and periodic-maintenance reminders (scheduler), AI diagnosis and hand-off to a technician, the 10% technician commission, role-based access, and the repair-vs-replace rule (repair cost above 40% of a new device suggests replacing).
- Repeated markup (sidebar, topbar) should become a shared layout/partial when the pages move to Razor views.
