import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import UserLayout from "./layouts/UserLayout";
//Services
import { userSingleloader, userloader } from "../services/loaders/userloader"
//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Help/Contact"
import Faqs from "../pages/Help/Faqs"
import Users from "../pages/Users/Users";
import { UserSingle } from "../pages/Users/UserSingle";
import UserError from "../pages/Users/UserError"
import { contactSubmit } from "../services/sender/contactSend";


export const navItems = [
    { title: 'Home', path: '/', element: <Home /> },
    {
        title: 'Users', path: 'users', element: <UserLayout />, errorElement: <UserError />,
        children: [
            {
                title: 'Users', index: true, element: <Users />, loader: () => {
                    return userloader()
                }
            },
            {
                title: 'User Details', path: ':id', element: <UserSingle />, loader: ({ params }) => {
                    return userSingleloader(params.id)
                }
            },
        ]
    },
    { title: 'About', path: "about", element: <About /> },
    {
        title: 'Help', path: 'help', element: <HelpLayout />,
        children: [
            { title: 'Help', path: 'faqs', element: <Faqs /> },
            {
                title: 'Help', path: 'contact', element: <Contact />, action: ({ request }) => {
                    console.log(request)
                    return contactSubmit(request);
                }
            }]
    }

];

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {navItems.map((item) => {
                return <Route key={item.title}
                    path={item.path} element={item.element}
                    errorElement={item.errorElement && item.errorElement}
                    loader={item.loader && item.loader}>
                    {/* child routes */}
                    {item.children && item.children.map((child) => {
                        return <Route key={child.title}
                            index={child.index && child.index}
                            path={child.path && child.path}
                            element={child.element}
                            errorElement={child.errorElement && child.errorElement}
                            loader={child.loader && child.loader}
                            action={child.action && child.action} />
                    })}
                </Route>
            })}

        </Route>
    ))