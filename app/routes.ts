import { type RouteConfig } from "@react-router/dev/routes";

export default [
    {
        index: true,
        file: "routes/home.tsx"
    },
    {
        path: "/auth",
        file: "routes/auth.tsx"
    },
    {
        path:"/Upload",
        file:"routes/Upload.tsx"
    },
     {
        path:"/resume/:id",
        file:"routes/Resume.tsx"
    }
] satisfies RouteConfig;


