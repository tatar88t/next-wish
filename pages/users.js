import User from "../components/user";

const UserList = ({users}) => {
    console.log(users);
    return(
        <>
            <h1>
                List Of Users
            </h1>
            {
                users.map(user => {
                    return(
                       <User key={user.id} name={user.name} email={user.email}/>
                    )
                })
            }
        </>
    )
};

export default UserList

export const getStaticProps = async () => {
    const res = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
    console.log(res);
    return {
        props: {users: res}
    }
}