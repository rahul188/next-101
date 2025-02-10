// print products/[ids] pages.tsx

export default async function Product({ params}: { params: { id: string } }) {
    const {id} = await params;
    return (
        <div>
            <h1>Product Component</h1>
            <p>{id}</p>
        </div>
    );
}