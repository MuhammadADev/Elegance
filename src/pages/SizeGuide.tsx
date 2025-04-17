import React from 'react';
import { Ruler, Info } from 'lucide-react';

export default function SizeGuide() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size guide and measurement instructions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Ruler className="h-8 w-8 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Size Chart</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-gray-600">Size</th>
                  <th className="px-6 py-3 text-gray-600">Bust (inches)</th>
                  <th className="px-6 py-3 text-gray-600">Waist (inches)</th>
                  <th className="px-6 py-3 text-gray-600">Hip (inches)</th>
                  <th className="px-6 py-3 text-gray-600">Length (inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">XS</td>
                  <td className="px-6 py-4">32-34</td>
                  <td className="px-6 py-4">24-26</td>
                  <td className="px-6 py-4">34-36</td>
                  <td className="px-6 py-4">38</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">S</td>
                  <td className="px-6 py-4">34-36</td>
                  <td className="px-6 py-4">26-28</td>
                  <td className="px-6 py-4">36-38</td>
                  <td className="px-6 py-4">39</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">M</td>
                  <td className="px-6 py-4">36-38</td>
                  <td className="px-6 py-4">28-30</td>
                  <td className="px-6 py-4">38-40</td>
                  <td className="px-6 py-4">40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">L</td>
                  <td className="px-6 py-4">38-40</td>
                  <td className="px-6 py-4">30-32</td>
                  <td className="px-6 py-4">40-42</td>
                  <td className="px-6 py-4">41</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">XL</td>
                  <td className="px-6 py-4">40-42</td>
                  <td className="px-6 py-4">32-34</td>
                  <td className="px-6 py-4">42-44</td>
                  <td className="px-6 py-4">42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Measure</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Bust</h3>
                <p className="text-gray-600">Measure around the fullest part of your bust, keeping the tape parallel to the floor.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Waist</h3>
                <p className="text-gray-600">Measure around your natural waistline, at the smallest part of your waist.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Hip</h3>
                <p className="text-gray-600">Measure around the fullest part of your hips, keeping the tape parallel to the floor.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Length</h3>
                <p className="text-gray-600">Measure from the shoulder seam to the desired length.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Info className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Fit Tips</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Take measurements over undergarments similar to those you'll wear with the garment</li>
              <li>• Keep the measuring tape snug but not tight</li>
              <li>• Stand straight and relaxed while measuring</li>
              <li>• If between sizes, order the larger size for a more comfortable fit</li>
              <li>• Consider the style and intended fit of the garment</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>• All measurements are approximate and may vary slightly between styles</p>
            <p>• Custom sizing is available for select items</p>
            <p>• For specific garment measurements, refer to individual product pages</p>
            <p>• Need help? Contact our customer service team for assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}