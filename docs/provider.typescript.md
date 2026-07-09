# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktn/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs github}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.provider.GithubProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-github'

new provider.GithubProvider(scope: Construct, id: string, config?: GithubProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetAppAuth">resetAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetCachePath">resetCachePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetLegacyClient">resetLegacyClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetMaxPerPage">resetMaxPerPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetParallelRequests">resetParallelRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetReadDelayMs">resetReadDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetRetryableErrors">resetRetryableErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetRetryDelayMs">resetRetryDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetWriteDelayMs">resetWriteDelayMs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.provider.GithubProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.provider.GithubProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.provider.GithubProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.provider.GithubProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.provider.GithubProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.provider.GithubProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.provider.GithubProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-github.provider.GithubProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAppAuth` <a name="resetAppAuth" id="@cdktn/provider-github.provider.GithubProvider.resetAppAuth"></a>

```typescript
public resetAppAuth(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetCachePath` <a name="resetCachePath" id="@cdktn/provider-github.provider.GithubProvider.resetCachePath"></a>

```typescript
public resetCachePath(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-github.provider.GithubProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetLegacyClient` <a name="resetLegacyClient" id="@cdktn/provider-github.provider.GithubProvider.resetLegacyClient"></a>

```typescript
public resetLegacyClient(): void
```

##### `resetMaxPerPage` <a name="resetMaxPerPage" id="@cdktn/provider-github.provider.GithubProvider.resetMaxPerPage"></a>

```typescript
public resetMaxPerPage(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-github.provider.GithubProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-github.provider.GithubProvider.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-github.provider.GithubProvider.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetParallelRequests` <a name="resetParallelRequests" id="@cdktn/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```typescript
public resetParallelRequests(): void
```

##### `resetReadDelayMs` <a name="resetReadDelayMs" id="@cdktn/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```typescript
public resetReadDelayMs(): void
```

##### `resetRetryableErrors` <a name="resetRetryableErrors" id="@cdktn/provider-github.provider.GithubProvider.resetRetryableErrors"></a>

```typescript
public resetRetryableErrors(): void
```

##### `resetRetryDelayMs` <a name="resetRetryDelayMs" id="@cdktn/provider-github.provider.GithubProvider.resetRetryDelayMs"></a>

```typescript
public resetRetryDelayMs(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-github.provider.GithubProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetWriteDelayMs` <a name="resetWriteDelayMs" id="@cdktn/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```typescript
public resetWriteDelayMs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GithubProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.provider.GithubProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-github'

provider.GithubProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.provider.GithubProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.provider.GithubProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-github'

provider.GithubProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-github'

provider.GithubProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-github'

provider.GithubProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GithubProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GithubProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.appAuthInput">appAuthInput</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.cachePathInput">cachePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.legacyClientInput">legacyClientInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxPerPageInput">maxPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.parallelRequestsInput">parallelRequestsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.readDelayMsInput">readDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryableErrorsInput">retryableErrorsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryDelayMsInput">retryDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.writeDelayMsInput">writeDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.appAuth">appAuth</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.cachePath">cachePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.legacyClient">legacyClient</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxPerPage">maxPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.parallelRequests">parallelRequests</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.readDelayMs">readDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryableErrors">retryableErrors</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryDelayMs">retryDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.writeDelayMs">writeDelayMs</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.provider.GithubProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.provider.GithubProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-github.provider.GithubProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-github.provider.GithubProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `appAuthInput`<sup>Optional</sup> <a name="appAuthInput" id="@cdktn/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```typescript
public readonly appAuthInput: GithubProviderAppAuth;
```

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `cachePathInput`<sup>Optional</sup> <a name="cachePathInput" id="@cdktn/provider-github.provider.GithubProvider.property.cachePathInput"></a>

```typescript
public readonly cachePathInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-github.provider.GithubProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `legacyClientInput`<sup>Optional</sup> <a name="legacyClientInput" id="@cdktn/provider-github.provider.GithubProvider.property.legacyClientInput"></a>

```typescript
public readonly legacyClientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxPerPageInput`<sup>Optional</sup> <a name="maxPerPageInput" id="@cdktn/provider-github.provider.GithubProvider.property.maxPerPageInput"></a>

```typescript
public readonly maxPerPageInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-github.provider.GithubProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-github.provider.GithubProvider.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-github.provider.GithubProvider.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parallelRequestsInput`<sup>Optional</sup> <a name="parallelRequestsInput" id="@cdktn/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```typescript
public readonly parallelRequestsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readDelayMsInput`<sup>Optional</sup> <a name="readDelayMsInput" id="@cdktn/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```typescript
public readonly readDelayMsInput: number;
```

- *Type:* number

---

##### `retryableErrorsInput`<sup>Optional</sup> <a name="retryableErrorsInput" id="@cdktn/provider-github.provider.GithubProvider.property.retryableErrorsInput"></a>

```typescript
public readonly retryableErrorsInput: number[];
```

- *Type:* number[]

---

##### `retryDelayMsInput`<sup>Optional</sup> <a name="retryDelayMsInput" id="@cdktn/provider-github.provider.GithubProvider.property.retryDelayMsInput"></a>

```typescript
public readonly retryDelayMsInput: number;
```

- *Type:* number

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-github.provider.GithubProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `writeDelayMsInput`<sup>Optional</sup> <a name="writeDelayMsInput" id="@cdktn/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```typescript
public readonly writeDelayMsInput: number;
```

- *Type:* number

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktn/provider-github.provider.GithubProvider.property.appAuth"></a>

```typescript
public readonly appAuth: GithubProviderAppAuth;
```

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-github.provider.GithubProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `cachePath`<sup>Optional</sup> <a name="cachePath" id="@cdktn/provider-github.provider.GithubProvider.property.cachePath"></a>

```typescript
public readonly cachePath: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-github.provider.GithubProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `legacyClient`<sup>Optional</sup> <a name="legacyClient" id="@cdktn/provider-github.provider.GithubProvider.property.legacyClient"></a>

```typescript
public readonly legacyClient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxPerPage`<sup>Optional</sup> <a name="maxPerPage" id="@cdktn/provider-github.provider.GithubProvider.property.maxPerPage"></a>

```typescript
public readonly maxPerPage: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-github.provider.GithubProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-github.provider.GithubProvider.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-github.provider.GithubProvider.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktn/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```typescript
public readonly parallelRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktn/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```typescript
public readonly readDelayMs: number;
```

- *Type:* number

---

##### `retryableErrors`<sup>Optional</sup> <a name="retryableErrors" id="@cdktn/provider-github.provider.GithubProvider.property.retryableErrors"></a>

```typescript
public readonly retryableErrors: number[];
```

- *Type:* number[]

---

##### `retryDelayMs`<sup>Optional</sup> <a name="retryDelayMs" id="@cdktn/provider-github.provider.GithubProvider.property.retryDelayMs"></a>

```typescript
public readonly retryDelayMs: number;
```

- *Type:* number

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-github.provider.GithubProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktn/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```typescript
public readonly writeDelayMs: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktn/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-github'

const githubProviderAppAuth: provider.GithubProviderAppAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth.property.id">id</a></code> | <code>string</code> | The GitHub App's identifier. This can also be set by the `GITHUB_APP_ID` environment variable. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth.property.installationId">installationId</a></code> | <code>string</code> | The GitHub App's installation identifier. This can also be set by the `GITHUB_APP_INSTALLATION_ID` environment variable. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth.property.pemFile">pemFile</a></code> | <code>string</code> | The GitHub App's PEM file content; |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The GitHub App's identifier. This can also be set by the `GITHUB_APP_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

The GitHub App's installation identifier. This can also be set by the `GITHUB_APP_INSTALLATION_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#installation_id GithubProvider#installation_id}

---

##### `pemFile`<sup>Required</sup> <a name="pemFile" id="@cdktn/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```typescript
public readonly pemFile: string;
```

- *Type:* string

The GitHub App's PEM file content;

`\n` can be used for newlines. This can also be set by the `GITHUB_APP_PEM_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktn/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.provider.GithubProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-github'

const githubProviderConfig: provider.GithubProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.appAuth">appAuth</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | The base URL for the GitHub API; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.cachePath">cachePath</a></code> | <code>string</code> | The path to the cache directory for persisting GitHub API requests between runs; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allow insecure server connections when using SSL. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.legacyClient">legacyClient</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use the legacy GitHub client implementation; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.maxPerPage">maxPerPage</a></code> | <code>number</code> | The maximum number of results per page for paginated API requests; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of retries for failed requests; this defaults to `3`. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.organization">organization</a></code> | <code>string</code> | GitHub organization to manage. This can also be set by the `GITHUB_ORGANIZATION` environment variable. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.owner">owner</a></code> | <code>string</code> | GitHub organization or user account to manage; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.parallelRequests">parallelRequests</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allow the provider to make parallel API calls; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.readDelayMs">readDelayMs</a></code> | <code>number</code> | The delay in milliseconds between read operations; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.retryableErrors">retryableErrors</a></code> | <code>number[]</code> | List of HTTP status codes that should be retried; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.retryDelayMs">retryDelayMs</a></code> | <code>number</code> | The delay in milliseconds between retry attempts; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.token">token</a></code> | <code>string</code> | GitHub OAuth or Personal Access Token (PAT) to use for authentication. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.writeDelayMs">writeDelayMs</a></code> | <code>number</code> | The delay in milliseconds between write operations; |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-github.provider.GithubProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#alias GithubProvider#alias}

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktn/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```typescript
public readonly appAuth: GithubProviderAppAuth;
```

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#app_auth GithubProvider#app_auth}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The base URL for the GitHub API;

this defaults to the GitHub API URL. If you are using GitHub Enterprise Server (GHES) or GitHub Enterprise Cloud with Data Residency (GHEC-DR), this is required. This can also be set by the `GITHUB_BASE_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#base_url GithubProvider#base_url}

---

##### `cachePath`<sup>Optional</sup> <a name="cachePath" id="@cdktn/provider-github.provider.GithubProviderConfig.property.cachePath"></a>

```typescript
public readonly cachePath: string;
```

- *Type:* string

The path to the cache directory for persisting GitHub API requests between runs;

if not set there will be no caching between runs. This can also be set by the `GITHUB_CACHE_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#cache_path GithubProvider#cache_path}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allow insecure server connections when using SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#insecure GithubProvider#insecure}

---

##### `legacyClient`<sup>Optional</sup> <a name="legacyClient" id="@cdktn/provider-github.provider.GithubProviderConfig.property.legacyClient"></a>

```typescript
public readonly legacyClient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use the legacy GitHub client implementation;

if set to `false`, the new client implementation is used. This can also be set by the `GITHUB_LEGACY_CLIENT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#legacy_client GithubProvider#legacy_client}

---

##### `maxPerPage`<sup>Optional</sup> <a name="maxPerPage" id="@cdktn/provider-github.provider.GithubProviderConfig.property.maxPerPage"></a>

```typescript
public readonly maxPerPage: number;
```

- *Type:* number

The maximum number of results per page for paginated API requests;

this defaults to `100`. This can also be set by the `GITHUB_MAX_PER_PAGE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#max_per_page GithubProvider#max_per_page}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-github.provider.GithubProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of retries for failed requests; this defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#max_retries GithubProvider#max_retries}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-github.provider.GithubProviderConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

GitHub organization to manage. This can also be set by the `GITHUB_ORGANIZATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#organization GithubProvider#organization}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-github.provider.GithubProviderConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

GitHub organization or user account to manage;

this is required when authenticating using a GitHub App. If the owner is not provided and a token is provided, the provider will attempt to auto-detect the owner associated with the token. This can also be set by the `GITHUB_OWNER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#owner GithubProvider#owner}

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktn/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```typescript
public readonly parallelRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allow the provider to make parallel API calls;

this is experimental and may cause concurrency and rate limiting issues. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation is designed to safely handle parallel requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktn/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```typescript
public readonly readDelayMs: number;
```

- *Type:* number

The delay in milliseconds between read operations;

this defaults to `0`. This can be used to mitigate rate limiting issues when performing a large number of read operations. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation is GitHub rate limit aware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `retryableErrors`<sup>Optional</sup> <a name="retryableErrors" id="@cdktn/provider-github.provider.GithubProviderConfig.property.retryableErrors"></a>

```typescript
public readonly retryableErrors: number[];
```

- *Type:* number[]

List of HTTP status codes that should be retried;

if not set this uses the provider defaults. This setting only applies when `max_retries` is greater than `0`. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation handles the retry logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#retryable_errors GithubProvider#retryable_errors}

---

##### `retryDelayMs`<sup>Optional</sup> <a name="retryDelayMs" id="@cdktn/provider-github.provider.GithubProviderConfig.property.retryDelayMs"></a>

```typescript
public readonly retryDelayMs: number;
```

- *Type:* number

The delay in milliseconds between retry attempts;

this defaults to `1000`. This setting only applies when `max_retries` is greater than `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#retry_delay_ms GithubProvider#retry_delay_ms}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-github.provider.GithubProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

GitHub OAuth or Personal Access Token (PAT) to use for authentication.

This can also be set by the `GITHUB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#token GithubProvider#token}

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktn/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```typescript
public readonly writeDelayMs: number;
```

- *Type:* number

The delay in milliseconds between write operations;

this defaults to `1000`. This is used to mitigate the GitHub API's abuse rate limits when writing. Note that **ALL** requests to the GraphQL API are implemented as `POST` requests under the hood, so this setting affects those calls as well. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation is GitHub rate limit aware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---



