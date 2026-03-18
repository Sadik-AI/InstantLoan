# MongoDB Notes

The application stores repair requests in MongoDB through the `Booking` model defined in `backend/src/models/Booking.ts`.

## Collection

- Collection name: `bookings`
- Primary fields:
  - `name`
  - `phone`
  - `deviceType`
  - `problem`
  - `status`
  - `createdAt`
  - `updatedAt`

## Sample Document

```json
{
  "name": "Aarav Mehta",
  "phone": "+919876543210",
  "deviceType": "Laptop",
  "problem": "Laptop shuts down after 10 minutes and the fan is unusually loud.",
  "status": "new",
  "createdAt": "2026-03-18T10:00:00.000Z",
  "updatedAt": "2026-03-18T10:00:00.000Z"
}
```
