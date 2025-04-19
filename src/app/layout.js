export const metadata = {
    title: 'X\'aro',
    description: 'The X\'aro website',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}