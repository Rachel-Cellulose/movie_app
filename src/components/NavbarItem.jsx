'use client'
import React from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem( {title, param} ) {

    const searchParams = useSearchParams ();
    const genre = searchParams.get('genre');
  return (
    <div>
<Link 
// className={`hover:text-gray-400 font-semibold 
// ${genre === param ? 'underline underline-offset-8 decoration-4
// decoration-gray-400 rounded-lg' : '' }`}

// href= {`/?genre=${param}`} >
// {title}


className={`hover:text-blue-800 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-gray-300 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
</Link>
    </div>
  );
}
