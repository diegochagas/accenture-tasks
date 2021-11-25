/**
 * Gets the processing page
 * @param {array} data
 */

async function processing() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('processing...');

      resolve('processing...')
    }, 2000);
  });
}

async function getOutputOfArray(data, index) {
  let current = data[index];
  let response = {};
  
  switch(current.state) {
    case 'processing':
      await processing(); 

      return getOutputOfArray(data, index + 1);
    case 'error':

      if (data[index].errorCode === 'NO_STOCK') {
        response = { title: 'Error page', message: 'No stock has been found' };
      } else if (data[index].errorCode === 'INCORRECT_DETAILS') {
        response = { title: 'Error page', message: 'Incorrect details have been entered' };
      } else if (data[index].errorCode === null) {
        response = { title: 'Error page', message: null };
      } else if (data[index].errorCode === undefined) {
        response = { title: 'Error page', message: null };
      }

      console.log(`
        ============================================================
        Status: ${current.state} - Response: ${JSON.stringify(response)}
        ============================================================
      `);
        
      return response;
    case 'success':
      response = { title: 'Order complete', message: null };
        
      console.log(`
        ============================================================
        Status: ${current.state} - Response: ${JSON.stringify(response)}
        ============================================================
      `);
      
      return response;
    default:
      throw new Error('Unknown state');
  }
}

function getProcessingPage(data) {
  return getOutputOfArray(data, 0);
}

async function main() {
  getProcessingPage([{ state: 'processing', errorCode: '' }, { state: 'error', errorCode: 'NO_STOCK' }])
  
  getProcessingPage([{ state: 'processing', errorCode: '' }, { state: 'error', errorCode: 'INCORRECT_DETAILS' }])
  
  getProcessingPage([{ state: 'processing', errorCode: '' }, { state: 'error', errorCode: null }])
  
  getProcessingPage([{ state: 'processing', errorCode: '' }, { state: 'error', errorCode: undefined }])
  
  getProcessingPage([{ state: 'processing', errorCode: '' }, { state: 'success', errorCode: '' }])
}

main();