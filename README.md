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
