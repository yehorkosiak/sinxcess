# Airtable Mailing List Integration Setup

This project includes Airtable integration for a simple email-only waitlist form. Follow these steps to configure it:

## 1. Airtable Base Setup

1. Go to [Airtable](https://airtable.com) and create a new base
2. Create a table named "Waitlist" with the following fields:
   - **Email** (Email)
   - **Submitted At** (Date & time)
   - **Status** (Single select with options: Pending, Contacted, Added)

## 2. Get Airtable Credentials

1. Go to [Airtable Personal Access Tokens](https://airtable.com/create/tokens)
2. Create a new token with:
   - Name: "Sinxcess Waitlist"
   - Scopes: `data.records:read`, `data.records:write`
   - Access: Select your base
3. Copy the generated token

4. Get your Base ID:
   - Go to https://airtable.com/api
   - Select your base
   - The Base ID will be shown (starts with "app...")

## 3. Environment Configuration

Update your `.env.local` file with your credentials:

```env
AIRTABLE_API_KEY=your_personal_access_token_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=Waitlist
```

## 4. Testing

1. Start your development server: `npm run dev`
2. Go to `/waitlist`
3. Enter an email address and submit the form
4. Check your Airtable base to see the new record

## Features

- ✅ Simple email-only collection
- ✅ Email validation (both client and server-side)
- ✅ Loading states during submission
- ✅ Success/error feedback
- ✅ Form reset after successful submission
- ✅ Automatic timestamp tracking
- ✅ Status field for follow-up management
- ✅ Clean, minimal UI focused on conversion

## Airtable Views (Recommended)

Create these views in your Airtable base for better organization:

1. **All Submissions** - Default view showing all records
2. **Pending** - Filter by Status = "Pending"
3. **By Date** - Sort by "Submitted At" (newest first)
4. **Export List** - Show only Email field for easy export

## Benefits of Simple Email Collection

- **Higher Conversion** - Single field reduces friction
- **Clean Data** - Focus on quality email addresses
- **Easy Export** - Simple CSV export for email marketing tools
- **Fast Setup** - Minimal Airtable configuration required

## Next Steps

Consider adding:

- Email notifications when new submissions arrive using Airtable automations
- Integration with email marketing tools (Mailchimp, ConvertKit, etc.)
- Duplicate email detection
- Email verification workflows
- Analytics dashboard for submission tracking
- A/B testing different form copy

## Email Marketing Integration

With clean email data in Airtable, you can easily:

- Export to CSV for upload to any email platform
- Use Airtable's native integrations with Mailchimp, Zapier, etc.
- Set up automated email sequences
- Segment users based on submission date
- Track engagement and conversion metrics
