# University Work — simple Google Drive setup

The portfolio is a regular static website hosted on GitHub Pages. There is **no Supabase, backend, admin password, or visitor login**. Google Drive stores the files.

## One-time setup

1. Open [Google Drive](https://drive.google.com/drive/my-drive) using your Google account.
2. Create a folder named `University Work — Public` for assignments you want visitors to see.
3. Right-click that folder → **Share** → under **General access**, select **Anyone with the link** → **Viewer**. Only do this for files you are happy to share publicly. Files inside inherit the folder's access unless you change their individual permissions.
4. Copy the folder URL. It looks like `https://drive.google.com/drive/folders/FOLDER_ID`. Copy only the `FOLDER_ID` part.
5. Open `config.js` and replace `PASTE_PUBLIC_FOLDER_ID_HERE` with that ID, keeping the quotation marks.
6. Upload the updated site files to your GitHub repository and let GitHub Pages publish them.

The public folder will be embedded in the **University Work** section, and the button will open the same folder in Google Drive.

## Keep private work private

- Create a separate folder such as `University Work — Private`.
- Keep its sharing setting as **Restricted** and do not put its folder ID or link in `config.js` or on the public portfolio.
- Upload private assignments only to that restricted folder. The portfolio cannot show private Drive files to you through an owner-only panel without additional integration, but you can manage them directly in Drive.

## Adding a task later

Upload the file (PDF, image, source code, PowerPoint, etc.) to the correct Drive folder. The public folder view updates from Drive; you do not need to edit the portfolio for each new public file.

**Important:** The public folder is visible to anyone who visits the portfolio. Never put passwords, personal data, or assignments that must remain private in it. This setup uses Drive for file storage; uploading happens in Drive, not through a custom upload form on the website.
