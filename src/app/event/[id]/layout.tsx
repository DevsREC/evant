export const metadata = {
    layout: false
}

export default function EventPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            {children}
        </>
    )
}