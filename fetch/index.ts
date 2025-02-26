// Define the interface for user data
interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }
  
  // Function to fetch user data
  async function fetchUserData(): Promise<UserData[] | null> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data: UserData[] = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user data', error);
      return null;
    }
  }
  

  // fetchUserData().then((data) => {
  //   if (data) {
  //     console.log('User Data:', data);
  //   } else {
  //     console.log('No data found.');
  //   }
  // });

  // Example usage
  fetchUserData().then((users) => {
    if (users && users.length > 0) {
      console.log('User Data:');
      users.forEach((user) => {
        console.log({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: user.address.geo,
          },
        });
      });
    } else {
      console.log('No user data found.');
    }
  });
  
