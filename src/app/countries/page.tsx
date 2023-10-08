export default async function Countries() {
const response = await fetch(`https://countries.trevorblades.com/graphql`, {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
      query: /*GraphQL */ `
         {
            countries {
              name,
              code
            }
          }`
   })
})

const {data} = await response.json();
return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative overflow-x-auto">
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Country name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Country code
                     </th>
                  </tr>
            </thead>
            <tbody>
               {data.countries.map((country: any) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {country.name}
                     </th>
                     <td className="px-6 py-4">{country.code}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   </main>
 );
}