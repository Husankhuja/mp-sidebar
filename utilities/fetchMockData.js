const mockData = {
    'dashboard': {
        'title': 'Dashboard',
        'text': 'Donec ultricies nisl eu urna lacinia, vitae placerat orci posuere. Proin molestie sem leo, id vehicula quam ultricies ut. Nunc in turpis augue. Fusce fringilla luctus maximus. Curabitur efficitur placerat malesuada. Duis eu tortor at neque lacinia volutpat eget in dolor. Vestibulum sagittis ligula ut neque auctor ultricies.'
    },
    'index': {
        'title': 'Dashboard',
        'text': 'Vivamus libero tellus, pulvinar vitae risus malesuada, luctus mattis leo. Duis ut sagittis lorem. Duis tincidunt, tellus ut facilisis tempor, risus nunc vulputate nibh, sit amet eleifend magna massa quis lacus. Vivamus vel turpis nunc. Aenean varius tellus vitae quam finibus, sit amet ultrices nunc commodo. Proin vestibulum metus diam, ut ultrices lectus fringilla mattis. Nunc quis fermentum arcu.'
    },
    'messages': {
        'title': 'Messages',
        'text': 'Cras nec velit diam. Mauris blandit felis eu efficitur pharetra. In ut mi luctus, vehicula turpis eu, porta magna. Donec ac tristique erat. Maecenas ut nulla leo. Vivamus quis maximus velit, in vestibulum quam. Curabitur id purus in elit blandit fringilla. Maecenas quis maximus eros, sit amet lacinia nisi. Nam sit amet orci feugiat, tincidunt erat at, tincidunt dui. Etiam augue ex, scelerisque at ligula finibus, tristique ornare ipsum. Nulla nec ante porta, vestibulum eros quis, venenatis justo. Donec dapibus lobortis dui, a tempor eros.'
    },
    'my calendar': {
        'title': 'MyCalender',
        'text': 'Donec sit amet ipsum id sem hendrerit gravida nec eu felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer pellentesque ut orci vitae tristique. Sed ac metus scelerisque, volutpat nisl in, lacinia est. Etiam aliquet maximus velit, eu accumsan nulla accumsan ut. Cras consequat mollis pretium. Pellentesque magna leo, egestas et euismod et, viverra vel justo. Nam sollicitudin, mauris eu pharetra sagittis, est erat dapibus nisl, sit amet consequat nisi justo eu lorem. Cras sapien dui, aliquet euismod venenatis ut, volutpat a purus.'
    },
    'my chapter': {
        'title': 'MyChapter',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia mollis ligula vitae gravida. Quisque molestie maximus ligula eget vestibulum. Quisque tortor magna, ultricies sit amet felis sed, dignissim tempus libero. Sed sed luctus mauris. Morbi molestie vestibulum iaculis. In hac habitasse platea dictumst. Aliquam interdum nisi egestas augue scelerisque, vel feugiat arcu pretium. Vestibulum luctus vestibulum nisi sed volutpat. Praesent dignissim, tortor non sodales consequat, justo purus euismod magna, eu fringilla risus turpis nec massa. Proin fringilla turpis at viverra interdum.'
    },
    'my courses': {
        'title': 'MyCourse',
        'text': 'Donec ultricies nisl eu urna lacinia, vitae placerat orci posuere. Proin molestie sem leo, id vehicula quam ultricies ut. Nunc in turpis augue. Fusce fringilla luctus maximus. Curabitur efficitur placerat malesuada. Duis eu tortor at neque lacinia volutpat eget in dolor. Vestibulum sagittis ligula ut neque auctor ultricies.'
    },
    'my projects': {
        'title': 'MyProjects',
        'text': 'Vivamus libero tellus, pulvinar vitae risus malesuada, luctus mattis leo. Duis ut sagittis lorem. Duis tincidunt, tellus ut facilisis tempor, risus nunc vulputate nibh, sit amet eleifend magna massa quis lacus. Vivamus vel turpis nunc. Aenean varius tellus vitae quam finibus, sit amet ultrices nunc commodo. Proin vestibulum metus diam, ut ultrices lectus fringilla mattis. Nunc quis fermentum arcu.'
    },
    'my startups': {
        'title': 'MyStartups',
        'text': 'Cras nec velit diam. Mauris blandit felis eu efficitur pharetra. In ut mi luctus, vehicula turpis eu, porta magna. Donec ac tristique erat. Maecenas ut nulla leo. Vivamus quis maximus velit, in vestibulum quam. Curabitur id purus in elit blandit fringilla. Maecenas quis maximus eros, sit amet lacinia nisi. Nam sit amet orci feugiat, tincidunt erat at, tincidunt dui. Etiam augue ex, scelerisque at ligula finibus, tristique ornare ipsum. Nulla nec ante porta, vestibulum eros quis, venenatis justo. Donec dapibus lobortis dui, a tempor eros.'
    },
    'my wallet': {
        'title': 'MyWallet',
        'text': 'Donec sit amet ipsum id sem hendrerit gravida nec eu felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer pellentesque ut orci vitae tristique. Sed ac metus scelerisque, volutpat nisl in, lacinia est. Etiam aliquet maximus velit, eu accumsan nulla accumsan ut. Cras consequat mollis pretium. Pellentesque magna leo, egestas et euismod et, viverra vel justo. Nam sollicitudin, mauris eu pharetra sagittis, est erat dapibus nisl, sit amet consequat nisi justo eu lorem. Cras sapien dui, aliquet euismod venenatis ut, volutpat a purus.'
    }
}
export function fetchData(component) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Object.keys(mockData).includes(component) ? mockData[component] : null);
        }, 1000);
    });
}

// export async function fetchData(component) {
//     const result = await resolveAfter2Seconds(component);
//     return result;
// }
// export const fetchData = (component) => {
//     const returnData = Object.keys(mockData).includes(component) ? mockData[component] : null;
//     setTimeout(() => {
//         return returnData;
//     }, 1000);
// }