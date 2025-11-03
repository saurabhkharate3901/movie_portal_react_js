import React, { lazy, Suspense } from "react"
const Home = lazy(() => import("../home/HomePage"))
const Navbar = lazy(() => import("../navbar/navbar"))
const TopRated = lazy(() => import('../TopRatedMovie/TopRated'))
const Upcomming = lazy(() => import('../upcomming/UpcommingMovie'))
const MovieDetails = lazy(() => import('../movieDetailsPage/MovieDetails'))
const SearchPage = lazy(()=>import("../SearchResultPage/SearchPage"))

export const paths = {
    route: {
        home: {
            path: '/',
            element:
                <Suspense fallback='Loading..'>
                    <Home />
                </Suspense>
        },
        topRated: {
            path: 'topRated',
            element:
                <Suspense fallback='Loading..'>
                    <TopRated />
                </Suspense>
        },
        upcomming: {
            path: 'upcomming',
            element:
                <Suspense fallback='Loading..'>
                    <Upcomming />
                </Suspense>
        },
        movieDetails: {
            path: 'movieDetails/:id',
            element:
                <Suspense fallback='Loading..'>
                    <MovieDetails />
                </Suspense>
        },
        searchPage: {
            path: 'searchPage/:query',
            element:
                <Suspense fallback='Loading..'>
                    <SearchPage/>
                </Suspense>
        },
    }
}