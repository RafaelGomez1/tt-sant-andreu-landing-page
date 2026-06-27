-- Contact form submissions for the table tennis club landing page.
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  lang text NOT NULL DEFAULT 'es',
  handled boolean NOT NULL DEFAULT false
);

-- Enable Row Level Security.
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public can insert new submissions (anon users on the landing page).
CREATE POLICY "insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No one can read, update, or delete from the client — admins handle
-- submissions directly in the Supabase dashboard.
