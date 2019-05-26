# How can I get live data in Framer X?

You can use code in Framer X to connect to live data. 

On the web, hosted services provide data to other applications through  Application Program Interfaces, or **API**s. An API consists of several special URLs, called **endpoints**, where the service will respond to requests with raw data.

Requesting (or “fetching”) data from an API is an **asynchronous** action, meaning that we need to write our code in such a way that it doesn’t try to use the data until after it arrives. Normally, the process for fetching data is: 

1. Request our data from an endpoint.
2. Wait for the data to arrive.
3. Store the data in some *state*.
4. Make our designs *conditional* on the content of that state.

There are some things to consider when working with APIs in Framer X. See the bottom of this article for notes on common pitfalls and problems. 

## Fetching Data in a Code Component

To fetch data in a code component, we would:

1. Create a state object using the `useState` hook.
2. Define an `async`  function that will request our data from an API endpoint, wait for the data to arrive, and then set a new state that includes the data
3. Call our `async` function from a `useEffect` hook. This ensures that we only call the function once, when the component mounts, and not every time the component renders.
4. Write our component so that the JSX it returns is conditional on the value of our state.

```tsx
export function MyComponent() {
  // [1] 
  const [state, setState] = React.useState({ results: []})
  
  // [2]
  const fetchData = async (endpoint) => {
  	const response = await fetch(endpoint)
  	const json = await response.json
  	setState({ results: json })
	}
  
  // [3] 
  React.useEffect(() => {
    fetchData("http://www.myAPI.com/restaurants")
  }, [])
  
  return (
      <Stack size="100%" direction="vertical">
      	{// [4] 
        	state.results.map( 
       	 		result => <Frame>{result.name}</Frame>
      		)
       	}
      </Stack>
  )
}
```

## Fetching data with Code Overrides

If we wanted to use data in our Overrides instead, we would:

1. Create a `Data` object to store our state.
2. Define an `async` function that will request our data from an API endpoint, wait for the data to arrive, and then store it in the `Data` object.
3. Write an override that returns a different set of values depending on the value of our state.
4. Call our `async` function.

```tsx
// [1]
const data = Data({
  results: []
})

// [2]
const fetchData = async (endpoint, callback) => {
  	const response = await fetch(endpoint)
  	const json = await response.json()
    data.results = json
	}

export const MyResultsStack: Override = () => {
  return {
		// [3]
    children: data.results.map(
      result => <Frame>{result.name}</Frame>
   	)
  }
}

// [4]
fetchData("http://www.myAPI.com/restaurants")


```

## Some things to consider

### Authorization

While some APIs are “open” and require no authentication, most will require an access token or API key. You can usually get these keys from the website that provides the service.

Some APIs require a service account to use. In my experience, these services are very open to providing temporary access to designers, so don’t be afraid to ask nicely. Even free services may impose a limit on how many requests can be made by a certain user. See the next section of **caching results** to prevent draining your access token with unnecessary requests.

Other APIs are entirely private. If you’re accessing your company’s private API, you may have to ask a colleague about how to (safely) access the data.

### Caching Requests

In both cases listed above, Framer will make a request to the API call every time the Preview reloads. Whether you’re working on the canvas or in code, Framer's preview reloads *after each change*, meaning that you may make hundreds (or  thousands) of requests over the course of a design session. If your API key 

In order to avoid this, it’s common for designers working with data to “cache” a response, storing it as some local data. There are many ways of doing this, however here’s one technique.

1. Add a line to your `async`  function that will turn the delivered data into a string and then log that string to the console.

   

```tsx
const fetchData = async (endpoint, callback) => {
  	const response = await fetch(endpoint)
  	const json = await response.json()
    data.results = json
    // [1]
    console.log(JSON.stringify(json)) 
	}
```

2. Open up the console and copy the string. Depending on the type of data you’re requesting, it might be pretty long—but copy the whole thing.
3. Paste the string as the value of some local variable.
4. Change your data fetching function to return that local variable, rather than actually making the data request.

```tsx
// [3]
const myCachedData = {
  results: {...} 
}
  
const fetchData = async (endpoint, callback) => {
    // const response = await fetch(endpoint)
    // const json = await response.json()
    // data.results = json
  
	  // [4]
    data.results = myCachedData
  }
```

In addition to keeping you from hitting the API endpoint too many times, using a local version of data can make a big difference in the speed of your prototyping, especially if your server isn’t the snappiest.

### Cross Origin Errors

Some data services use a “same-origin policy”. Under this policy, the service will only send data to the same domain (or origin) as made the request. Your API requests might sometimes get caught in this net.

You can fix the problem by using Heroku’s [CORS-Anywhere](https://cors-anywhere.herokuapp.com/) service. This service will resolve API requests on your behalf and fix the cross origin errors. To use it, add `https://cors-anywhere.herokuapp.com` to the front of your endpoint’s url.

```tsx
const myEndPoint = "http://www.myAPI.com/restaurants"

fetchData("https://cors-anywhere.herokuapp.com/" + myEndPoint)
```