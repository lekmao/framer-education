import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"

export function RandomUser(props) {
    const { userIndex, ...rest } = props

    const [users, setUsers] = React.useState([])

    React.useLayoutEffect(() => {
        // [1]
        const stringifiedUsers = localStorage.getItem("uiNamesUsers")

        // [2]
        if (ALWAYS_NEW_USERS) {
            loadUsers()
            return
        }

        // [3]
        if (stringifiedUsers) {
            const users = JSON.parse(stringifiedUsers)
            setUsers(JSON.parse(stringifiedUsers))
        } else {
            loadUsers()
        }
    }, [])

    // [4]
    const loadUsers = async () => {
        const url = "https://uinames.com/api/?ext&amount=101"
        const resp = await fetch(url)
        const json = await resp.json()
        const stringifiedUsers = JSON.stringify(json)
        localStorage.setItem("uiNamesUsers", stringifiedUsers)
        setUsers(json)
    }

    // [5]
    const user = users[userIndex] || FALLBACK_USER

    // [6]
    return (
        <Frame
            {...rest}
            background="none"
            overflow="hidden"
            borderRadius={12}
            shadow="2px 0px 6px rgba(0,0,0,.16)"
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: 16,
                    gridGap: 16,
                    display: "grid",
                    color: "#2d2d2d",
                    backgroundColor: "#fefefe",
                    gridTemplateRows: "1fr min-content",
                    gridTemplateColumns: "1fr",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${user.photo})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center center`,
                        backgroundSize: "cover",
                    }}
                />
                <div
                    style={{
                        ...props.style,
                        width: "100%",
                        fontSize: 24,
                        fontWeight: 800,
                    }}
                >
                    <div>{user.name}</div>
                    <div>{user.surname}</div>
                    <div>
                        <small>{user.region}</small>
                    </div>
                </div>
            </div>
        </Frame>
    )
}

RandomUser.defaultProps = {
    value: 0,
}

addPropertyControls(RandomUser, {
    userIndex: {
        title: "User",
        type: ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: Math.floor(Math.random() * 100),
    },
})

// [7]
const ALWAYS_NEW_USERS = false

// [8]
const FALLBACK_USER = {
    name: "John",
    surname: "Doe",
    gender: "male",
    region: "United States",
    age: 29,
    title: "mr",
    phone: "(123) 456 7890",
    birthday: {
        dmy: "19/06/1987", // day, month, year
        mdy: "06/19/1987", // month, day, year
        raw: 551062610, // UNIX timestamp
    },
    email: "john.doe@example.com",
    password: "Doe87(!",
    credit_card: {
        expiration: "12/20",
        number: "1234-5678-1234-5678",
        pin: 1234,
        security: 123,
    },
    photo: "https://uinames.com/api/photos/male/1.jpg",
}

/* Note ____________

[1]
Start by looking for our users in local storage

[2]
If ALWAYS_NEW_USERS is true, load new users.

[3]
If we have a users string in local storage, then turn this string back into javascript and set the result to state. Otherwise, if we don't have a users string (ie if this is the first time loading the component), load new users from the web and save them to local storage.

[4]
The loadUsers function does a few things:

- Fetches data from the uiNames API
- Turns the response into javascript (an array of objects)
- Creates a string version of that array into a string
- Save the string to local storage
- Sets the javascript array to state

[5]
Our `userIndex` property control provides a number between 0 and 100, and the users object is an array of 101 objects. The component will use the object stored at the property control's index. If we don't have a users array yet, we'll use the fallback user until the data loads.

[6]
We can use the user data however we like.

[7]
Here's our control for always fetching new users.

[7]
And here's the fallback user.
*/
