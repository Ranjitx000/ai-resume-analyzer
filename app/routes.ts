<<<<<<< HEAD
import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/auth.tsx'),
    route('/upload', 'routes/upload.tsx'),
    route('/resume/:id', 'routes/resume.tsx'),
    route('/wipe', 'routes/wipe.tsx'),
] satisfies RouteConfig;
=======
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
    }
] satisfies RouteConfig;


>>>>>>> de14fa827efa76af937c80dcd63f8c33d18d0d10
