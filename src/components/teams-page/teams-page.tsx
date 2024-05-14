import { Component, h } from '@stencil/core';

@Component({
  tag: 'teams-page',
  styleUrl: './../tailwind.component.css',
  shadow: true,
})
export class TeamsPage {
  render() {
    return (
      <div class="bg-gray-100 p-4">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-2xl font-bold mb-4">Tabela de Times</h1>

          <table class="min-w-full bg-white rounded-lg overflow-hidden">
            <thead class="bg-gray-200 text-gray-700">
            <tr>
              <th class="py-2 px-4 text-left">Time</th>
              <th class="py-2 px-4 text-left">Pontuação</th>
              <th class="py-2 px-4 text-left">Posição</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="py-2 px-4">Time A</td>
              <td class="py-2 px-4">20</td>
              <td class="py-2 px-4">1</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Time B</td>
              <td class="py-2 px-4">15</td>
              <td class="py-2 px-4">2</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Time C</td>
              <td class="py-2 px-4">12</td>
              <td class="py-2 px-4">3</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Time D</td>
              <td class="py-2 px-4">8</td>
              <td class="py-2 px-4">4</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
