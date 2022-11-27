import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItem = () => {
    return (
        <div className="p-6 py-12 bg-yellow-500 dark:text-gray-900">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">Avertised
                        <br className="sm:hidden" /> Items
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Moto Reseller Ads Here</span>

                    </div>
                    <Link href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">LoadItems</Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;