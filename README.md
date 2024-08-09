# Welcome to Reminder Service

## Project Setup

1. **Clone the project on your local machine**
   - Clone this repository: `[ReminderService](https://github.com/Srinu-Bandlamudi/ReminderService)`

2. **Install dependencies**
   - Execute `npm install` in the root directory after cloning the repository.

3. **Environment Setup**
   - Create a `.env` file in the root directory and add the following environment variables:
     ```plaintext
     PORT=3005
     EMAIL_PASS=sbbkelttjlmncqib
     EMAIL_ID=airlineremainder@gmail.com
     MESSAGE_BROKER_URL='amqp://localhost'
     EXCHANGE_NAME=AIRLINE_BOOKING
     REMINDER_BINDING_KEY=REMINDER_SERVICE
     ```

4. **Database Setup**
   - Once you've added your DB config as listed above, navigate to the `src` folder from your terminal and execute:
     ```bash
     npx sequelize db:create
     ```
   - Then, execute the migration command:
     ```bash
     npx sequelize db:migrate
     ```

## Database Design

- **Tables:**
  - NotificationTicket

- **NotificationTicket Model:**
  - Manages email notifications sent to users regarding their bookings.
  - Fields:
    - `subject`: The subject of the email notification.
    - `content`: The body content of the email.
    - `recepientEmail`: The email address of the recipient.
    - `status`: The status of the notification (PENDING, SUCCESS, FAILED).
    - `notificationTime`: The time the notification is sent.

- **Table Schema:**

  ```bash
  npx sequelize model:generate --name NotificationTicket --attributes subject:String,content:String,recepientEmail:String,status:ENUM,PENDING,SUCCESS,FAILED,notificationTime:Date
