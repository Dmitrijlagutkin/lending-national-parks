const MAP_TILER_API_KEY = import.meta.env.PUBLIC_MAP_TILER_API_KEY;

if (!MAP_TILER_API_KEY) {
    console.error('MAP_TILER_API_KEY is not defined');
}
 
export const envVars = {
    MAP_TILER_API_KEY
} as const; 