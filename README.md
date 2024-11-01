<h1 align="center">Ignite Call</h1>

![preview](./.github/preview/preview.png)

#### This project is a schedule system that is connected with google calendar.

### Resource

- React hook form and Zod to handle with form and validation.
- Tanstack React query to handle with routes.
- Axios to handle with API requests.
- OAuth to handle with authentication.
- Prisma to provide database table schemas.
- Connect with google account and provide permission to use calendar.

## Features

### Authentication

- [x] it should be able to authenticate using Google account;

### Profile

- [x] it should be able to create a user name;
- [x] it should be able to config a full name;
- [x] it should be able to write about you;
- [x] it should be able to load profile photo from Google account;

### Scheduling

- [x] it should be able to set days and times that is available;
- [x] it should be able to view days and times that is available;
- [x] it should be able to check directly on Google Calendar the day and hour of scheduling;

## Run

<p>To run this application some environment variable is needed. </p>

[Google OAuth](https://developers.google.com/identity/protocols/oauth2)

- [ ] AUTH_GOOGLE_ID
- [ ] AUTH_GOOGLE_SECRET

[Next Auth Secret](https://next-auth.js.org/configuration/options#nextauth_secret)

- [ ] NEXTAUTH_SECRET

```bash
git clone https://github.com/andresilveira1/ignite-call.git

npm install
```

```bash
  docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  
  docker start

  npx prisma migrate dev
```