# CodeAlpha Event Registration System

A REST API for managing events and user registrations. Users can browse events, view event details, register for events, view their registrations, and cancel registrations.

## Features

- Create, view, update, and delete events (according to authorization rules)
- List events and retrieve event details
- Register a user for an event
- View a user's registrations
- Cancel a registration
- Optional user authentication and event-organizer/admin permissions
- Validate event capacity and prevent duplicate registrations

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- bcryptjs (if authentication is implemented)
- jsonwebtoken (if JWT authentication is implemented)
- express-validator (if used for request validation)

## Project Structure

```text
CodeAlpha_EventRegistration/
├── src/
│   ├── database/
│   │   └── connectDB.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   └── registrationController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │   └── loggerMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── eventModel.js
│   │   └── registrationModel.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── eventRoutes.js
│   │   └── registrationRoutes.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── eventService.js
│   │   └── registrationService.js
│   └── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── README.md

```

## Requirements

- Node.js and npm
- A MongoDB database, local or hosted

## Installation

```bash
git clone <https://github.com/Emmacfemi/CodeAlpha_EventRegistration.git
cd CodeAlpha_EventRegistration
npm install
```

Create a `.env` file in the project root. Example:

```env
PORT=4002
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.cohnxfg.mongodb.net/
JWT_SECRET=vsfsgsgsgDEffgdDGrRGHHFGSFDFFDFBDADFAFDDADSAFADS
```

`JWT_SECRET` is needed only if the project uses JWT authentication. Keep secrets private and do not commit `.env`.

## Run the Application

```bash
npm run dev
```

If your project does not define a `dev` script, use the start command configured in `package.json`, for example:

```bash
npm start
```

## API Endpoints

The following is a suggested endpoint design. Match it to the routes implemented in your application.

### Authentication (optional)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Create a user account |
| `POST` | `/api/auth/login` | Authenticate a user |

### Events

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/events` | List events |
| `GET` | `/api/events/:id` | Get event details |
| `POST` | `/api/events` | Create an event |
| `PUT` | `/api/events/:id` | Update an event |
| `DELETE` | `/api/events/:id` | Delete an event |

### Registrations

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/events/:id/register` | Register for an event |
| `GET` | `/api/registrations` | List the authenticated user's registrations |
| `GET` | `/api/registrations/:id` | Get a registration |
| `DELETE` | `/api/registrations/:id` | Cancel a registration |

Authentication and authorization requirements depend on the implementation. Protect private operations when authentication is enabled.

## Data Models

### User
- `name`
- `email`
- `password` (store a secure hash, never plaintext, if authentication is used)

### Event
- `title`
- `description`
- `date`
- `location`
- `capacity`

### Registration
- `user` — reference to a user
- `event` — reference to an event
- `registeredAt`
- `status`

## Registration Rules

Recommended checks include:

- The requested event exists.
- The event has available capacity.
- The user has not already registered.
- A cancellation only affects a registration the user is authorized to manage.
- Event dates and registration input are valid.

## Testing

Use Postman, Insomnia, or `curl` to test event CRUD, registration, duplicate registration handling, capacity limits, registration listing, and cancellation.

## Author

**CodeAlpha Backend Development Internship — Task 2**
