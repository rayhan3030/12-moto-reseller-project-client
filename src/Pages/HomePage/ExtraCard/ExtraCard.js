import React from 'react';

const ExtraCard = () => {
    return (
        <div className="p-6 py-12 dark:bg-base-200 dark:text-gray-400">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-4xl tracking-tighter font-bold">Safe and
                        <br className="sm:hidden" /> {" "} 100% secure payment
                    </h2>
                    <p>🏍🏍Thank You for choosing Moto Reseller!! 🏍🏍</p>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free GPS Tracker! Use Promocode:</span>
                        <span className="font-bold text-lg">MOTOSALETESS</span>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ExtraCard;