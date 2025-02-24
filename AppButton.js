export default {
        template: `
            <button 
                class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" 
                :disabled="processing"
            >
                hekllo
            </button>
        `,

        data() {
            return {
                processing: false
            };
        }
}
