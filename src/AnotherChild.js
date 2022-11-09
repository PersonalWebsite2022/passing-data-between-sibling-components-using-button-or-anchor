export const AnotherChild = (prop) => {
    return (
        <>
            <h1>Another Child Component</h1>
            <div>Data passed from Child Component: {prop.isLinkClickedInChild.toString()}</div>
        </>
    )
}