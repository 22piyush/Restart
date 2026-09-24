


const Blog1 = async ({ params }) => {
    const { id } = await params;

    return (
        <div>
            <h1>Blog {id}</h1>
            <p>This is the content of Blog 1.</p>
        </div>
    );
};

export default Blog1;