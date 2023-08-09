export const BASE_URL = `https://cdn.contentful.com`;

// SPACE
export const GET_SPACE = `${BASE_URL}/spaces/${process.env.SPACE_ID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

// Content types
export const GET_CONTENT_MODEL = `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/content_types?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
export const GET_CONTENT_TYPE = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/content_types/product?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

// Entries

// Get all entries of a space
export const GET_ALL_ENTRIES = `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

export const GET_SINGLE_ENTRY = `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

// Static Page IDs
export const ABOUT_ID = `5wXQGH7Of5nYxWqPzLh8SM`;
export const CONTACT_ID = `2UDWb179AgOuPSwqzLytSM`;
export const TRACKING_ID = `6xWhYn726PTNQKjnWBQJCj`;