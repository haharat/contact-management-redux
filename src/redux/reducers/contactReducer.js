const initialState = [{
    "id": "167cd83c-f716-4f64-9f02-c409c2be587e",
    "name": "David Becham",
    "email": "david@hotmail.com",
    "phone": "985-587-5478",
    "website": "https://www.davidpersonal.com",
    "company": "FinTech Multinational",
    "address": {
        "street": "23 Main St",
        "suite": "12C",
        "city": "Las Vegas",
        "state": "CA",
        "zip": "85462"
    }
},
{
    "id": "8d9c78b0-57e5-4e6b-9f57-3a488741508c",
    "name": "Alexandar Daniel",
    "email": "dan.alexander@corp.com",
    "phone": "236-452-4582",
    "website": "https://www.alex-dan.com",
    "company": "Financial Organization",
    "address": {
        "street": "1254 Albert Rd",
        "suite": "56 E",
        "city": "Navada",
        "state": "CA",
        "zip": "45241"
    }
},
{
    "id": "3b176ff4-9084-4671-84e3-522abd2e3790",
    "name": "Shan Morris",
    "email": "shan@yahoo.com",
    "phone": "456-254-1111",
    "website": "https://www.shan-m.com",
    "company": "Financial Bank Corp.",
    "address": {
        "street": "8596 81st St",
        "suite": "BVC",
        "city": "New York",
        "state": "NY",
        "zip": "22556"
    }
},
{
    "id": "a59107df-5612-4363-b048-8c6ee304c078",
    "name": "Marcus Rodrigo",
    "email": "mr5845@gmail.com",
    "phone": "536-111-4455",
    "website": "https://www.mark.in",
    "company": "Health & Org",
    "address": {
        "street": "695 Lambertvill",
        "suite": "69F",
        "city": "East Coast",
        "state": "MI",
        "zip": "11452"
    }
},
{
    "id": "284698d4-4f95-4f5c-8155-afddb681e0fb",
    "name": "Asim Kumar Shaha",
    "email": "asim@outlook.com",
    "phone": "213-566-8596",
    "website": "https://www.asim-b.net",
    "company": "Personal Tech",
    "address": {
        "street": "85-85 72 Falcon Dr",
        "suite": "V",
        "city": "Brooklyn",
        "state": "NY",
        "zip": "12541"
    }
},
{
    "id": "8ec98fbd-07a7-4b1d-9129-73697e01ee80",
    "name": "Nancy Mendala",
    "email": "men.nacy458@gmail.com",
    "phone": "858-635-4596",
    "website": "https://www.nancy.com",
    "company": "World Submit & Co",
    "address": {
        "street": "1300 Street Rd",
        "suite": "6V",
        "city": "Washington",
        "state": "DC",
        "zip": "45871"
    }
}]

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    default:
      return state;
  }
};
