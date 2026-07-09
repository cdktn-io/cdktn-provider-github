# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktn/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs github}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.provider.GithubProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new GithubProvider(Construct Scope, string Id, GithubProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-github.provider.GithubProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetAppAuth">ResetAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetCachePath">ResetCachePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetLegacyClient">ResetLegacyClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetMaxPerPage">ResetMaxPerPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetParallelRequests">ResetParallelRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetReadDelayMs">ResetReadDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetRetryableErrors">ResetRetryableErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetRetryDelayMs">ResetRetryDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.resetWriteDelayMs">ResetWriteDelayMs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.provider.GithubProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.provider.GithubProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.provider.GithubProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.provider.GithubProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.provider.GithubProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.provider.GithubProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.provider.GithubProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-github.provider.GithubProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAppAuth` <a name="ResetAppAuth" id="@cdktn/provider-github.provider.GithubProvider.resetAppAuth"></a>

```csharp
private void ResetAppAuth()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetCachePath` <a name="ResetCachePath" id="@cdktn/provider-github.provider.GithubProvider.resetCachePath"></a>

```csharp
private void ResetCachePath()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktn/provider-github.provider.GithubProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetLegacyClient` <a name="ResetLegacyClient" id="@cdktn/provider-github.provider.GithubProvider.resetLegacyClient"></a>

```csharp
private void ResetLegacyClient()
```

##### `ResetMaxPerPage` <a name="ResetMaxPerPage" id="@cdktn/provider-github.provider.GithubProvider.resetMaxPerPage"></a>

```csharp
private void ResetMaxPerPage()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-github.provider.GithubProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-github.provider.GithubProvider.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-github.provider.GithubProvider.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetParallelRequests` <a name="ResetParallelRequests" id="@cdktn/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```csharp
private void ResetParallelRequests()
```

##### `ResetReadDelayMs` <a name="ResetReadDelayMs" id="@cdktn/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```csharp
private void ResetReadDelayMs()
```

##### `ResetRetryableErrors` <a name="ResetRetryableErrors" id="@cdktn/provider-github.provider.GithubProvider.resetRetryableErrors"></a>

```csharp
private void ResetRetryableErrors()
```

##### `ResetRetryDelayMs` <a name="ResetRetryDelayMs" id="@cdktn/provider-github.provider.GithubProvider.resetRetryDelayMs"></a>

```csharp
private void ResetRetryDelayMs()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-github.provider.GithubProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetWriteDelayMs` <a name="ResetWriteDelayMs" id="@cdktn/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```csharp
private void ResetWriteDelayMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GithubProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.provider.GithubProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

GithubProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.provider.GithubProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.provider.GithubProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

GithubProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Github;

GithubProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

GithubProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GithubProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.provider.GithubProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GithubProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.appAuthInput">AppAuthInput</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.cachePathInput">CachePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.insecureInput">InsecureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.legacyClientInput">LegacyClientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxPerPageInput">MaxPerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.parallelRequestsInput">ParallelRequestsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.readDelayMsInput">ReadDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryableErrorsInput">RetryableErrorsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryDelayMsInput">RetryDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.writeDelayMsInput">WriteDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.appAuth">AppAuth</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.cachePath">CachePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.legacyClient">LegacyClient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxPerPage">MaxPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.parallelRequests">ParallelRequests</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.readDelayMs">ReadDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryableErrors">RetryableErrors</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.retryDelayMs">RetryDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.writeDelayMs">WriteDelayMs</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.provider.GithubProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.provider.GithubProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-github.provider.GithubProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-github.provider.GithubProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AppAuthInput`<sup>Optional</sup> <a name="AppAuthInput" id="@cdktn/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```csharp
public GithubProviderAppAuth AppAuthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `CachePathInput`<sup>Optional</sup> <a name="CachePathInput" id="@cdktn/provider-github.provider.GithubProvider.property.cachePathInput"></a>

```csharp
public string CachePathInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktn/provider-github.provider.GithubProvider.property.insecureInput"></a>

```csharp
public bool|IResolvable InsecureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LegacyClientInput`<sup>Optional</sup> <a name="LegacyClientInput" id="@cdktn/provider-github.provider.GithubProvider.property.legacyClientInput"></a>

```csharp
public bool|IResolvable LegacyClientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxPerPageInput`<sup>Optional</sup> <a name="MaxPerPageInput" id="@cdktn/provider-github.provider.GithubProvider.property.maxPerPageInput"></a>

```csharp
public double MaxPerPageInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-github.provider.GithubProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-github.provider.GithubProvider.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-github.provider.GithubProvider.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ParallelRequestsInput`<sup>Optional</sup> <a name="ParallelRequestsInput" id="@cdktn/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```csharp
public bool|IResolvable ParallelRequestsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadDelayMsInput`<sup>Optional</sup> <a name="ReadDelayMsInput" id="@cdktn/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```csharp
public double ReadDelayMsInput { get; }
```

- *Type:* double

---

##### `RetryableErrorsInput`<sup>Optional</sup> <a name="RetryableErrorsInput" id="@cdktn/provider-github.provider.GithubProvider.property.retryableErrorsInput"></a>

```csharp
public double[] RetryableErrorsInput { get; }
```

- *Type:* double[]

---

##### `RetryDelayMsInput`<sup>Optional</sup> <a name="RetryDelayMsInput" id="@cdktn/provider-github.provider.GithubProvider.property.retryDelayMsInput"></a>

```csharp
public double RetryDelayMsInput { get; }
```

- *Type:* double

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-github.provider.GithubProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `WriteDelayMsInput`<sup>Optional</sup> <a name="WriteDelayMsInput" id="@cdktn/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```csharp
public double WriteDelayMsInput { get; }
```

- *Type:* double

---

##### `AppAuth`<sup>Optional</sup> <a name="AppAuth" id="@cdktn/provider-github.provider.GithubProvider.property.appAuth"></a>

```csharp
public GithubProviderAppAuth AppAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-github.provider.GithubProvider.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `CachePath`<sup>Optional</sup> <a name="CachePath" id="@cdktn/provider-github.provider.GithubProvider.property.cachePath"></a>

```csharp
public string CachePath { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-github.provider.GithubProvider.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LegacyClient`<sup>Optional</sup> <a name="LegacyClient" id="@cdktn/provider-github.provider.GithubProvider.property.legacyClient"></a>

```csharp
public bool|IResolvable LegacyClient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxPerPage`<sup>Optional</sup> <a name="MaxPerPage" id="@cdktn/provider-github.provider.GithubProvider.property.maxPerPage"></a>

```csharp
public double MaxPerPage { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-github.provider.GithubProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-github.provider.GithubProvider.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-github.provider.GithubProvider.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ParallelRequests`<sup>Optional</sup> <a name="ParallelRequests" id="@cdktn/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```csharp
public bool|IResolvable ParallelRequests { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadDelayMs`<sup>Optional</sup> <a name="ReadDelayMs" id="@cdktn/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```csharp
public double ReadDelayMs { get; }
```

- *Type:* double

---

##### `RetryableErrors`<sup>Optional</sup> <a name="RetryableErrors" id="@cdktn/provider-github.provider.GithubProvider.property.retryableErrors"></a>

```csharp
public double[] RetryableErrors { get; }
```

- *Type:* double[]

---

##### `RetryDelayMs`<sup>Optional</sup> <a name="RetryDelayMs" id="@cdktn/provider-github.provider.GithubProvider.property.retryDelayMs"></a>

```csharp
public double RetryDelayMs { get; }
```

- *Type:* double

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-github.provider.GithubProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `WriteDelayMs`<sup>Optional</sup> <a name="WriteDelayMs" id="@cdktn/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```csharp
public double WriteDelayMs { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktn/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new GithubProviderAppAuth {
    string Id,
    string InstallationId,
    string PemFile
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth.property.id">Id</a></code> | <code>string</code> | The GitHub App's identifier. This can also be set by the `GITHUB_APP_ID` environment variable. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth.property.installationId">InstallationId</a></code> | <code>string</code> | The GitHub App's installation identifier. This can also be set by the `GITHUB_APP_INSTALLATION_ID` environment variable. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth.property.pemFile">PemFile</a></code> | <code>string</code> | The GitHub App's PEM file content; |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The GitHub App's identifier. This can also be set by the `GITHUB_APP_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```csharp
public string InstallationId { get; set; }
```

- *Type:* string

The GitHub App's installation identifier. This can also be set by the `GITHUB_APP_INSTALLATION_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#installation_id GithubProvider#installation_id}

---

##### `PemFile`<sup>Required</sup> <a name="PemFile" id="@cdktn/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```csharp
public string PemFile { get; set; }
```

- *Type:* string

The GitHub App's PEM file content;

`\n` can be used for newlines. This can also be set by the `GITHUB_APP_PEM_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktn/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.provider.GithubProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new GithubProviderConfig {
    string Alias = null,
    GithubProviderAppAuth AppAuth = null,
    string BaseUrl = null,
    string CachePath = null,
    bool|IResolvable Insecure = null,
    bool|IResolvable LegacyClient = null,
    double MaxPerPage = null,
    double MaxRetries = null,
    string Organization = null,
    string Owner = null,
    bool|IResolvable ParallelRequests = null,
    double ReadDelayMs = null,
    double[] RetryableErrors = null,
    double RetryDelayMs = null,
    string Token = null,
    double WriteDelayMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.appAuth">AppAuth</a></code> | <code><a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The base URL for the GitHub API; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.cachePath">CachePath</a></code> | <code>string</code> | The path to the cache directory for persisting GitHub API requests between runs; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allow insecure server connections when using SSL. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.legacyClient">LegacyClient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use the legacy GitHub client implementation; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.maxPerPage">MaxPerPage</a></code> | <code>double</code> | The maximum number of results per page for paginated API requests; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of retries for failed requests; this defaults to `3`. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.organization">Organization</a></code> | <code>string</code> | GitHub organization to manage. This can also be set by the `GITHUB_ORGANIZATION` environment variable. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.owner">Owner</a></code> | <code>string</code> | GitHub organization or user account to manage; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.parallelRequests">ParallelRequests</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allow the provider to make parallel API calls; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.readDelayMs">ReadDelayMs</a></code> | <code>double</code> | The delay in milliseconds between read operations; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.retryableErrors">RetryableErrors</a></code> | <code>double[]</code> | List of HTTP status codes that should be retried; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.retryDelayMs">RetryDelayMs</a></code> | <code>double</code> | The delay in milliseconds between retry attempts; |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.token">Token</a></code> | <code>string</code> | GitHub OAuth or Personal Access Token (PAT) to use for authentication. |
| <code><a href="#@cdktn/provider-github.provider.GithubProviderConfig.property.writeDelayMs">WriteDelayMs</a></code> | <code>double</code> | The delay in milliseconds between write operations; |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-github.provider.GithubProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#alias GithubProvider#alias}

---

##### `AppAuth`<sup>Optional</sup> <a name="AppAuth" id="@cdktn/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```csharp
public GithubProviderAppAuth AppAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#app_auth GithubProvider#app_auth}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The base URL for the GitHub API;

this defaults to the GitHub API URL. If you are using GitHub Enterprise Server (GHES) or GitHub Enterprise Cloud with Data Residency (GHEC-DR), this is required. This can also be set by the `GITHUB_BASE_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#base_url GithubProvider#base_url}

---

##### `CachePath`<sup>Optional</sup> <a name="CachePath" id="@cdktn/provider-github.provider.GithubProviderConfig.property.cachePath"></a>

```csharp
public string CachePath { get; set; }
```

- *Type:* string

The path to the cache directory for persisting GitHub API requests between runs;

if not set there will be no caching between runs. This can also be set by the `GITHUB_CACHE_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#cache_path GithubProvider#cache_path}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allow insecure server connections when using SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#insecure GithubProvider#insecure}

---

##### `LegacyClient`<sup>Optional</sup> <a name="LegacyClient" id="@cdktn/provider-github.provider.GithubProviderConfig.property.legacyClient"></a>

```csharp
public bool|IResolvable LegacyClient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use the legacy GitHub client implementation;

if set to `false`, the new client implementation is used. This can also be set by the `GITHUB_LEGACY_CLIENT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#legacy_client GithubProvider#legacy_client}

---

##### `MaxPerPage`<sup>Optional</sup> <a name="MaxPerPage" id="@cdktn/provider-github.provider.GithubProviderConfig.property.maxPerPage"></a>

```csharp
public double MaxPerPage { get; set; }
```

- *Type:* double

The maximum number of results per page for paginated API requests;

this defaults to `100`. This can also be set by the `GITHUB_MAX_PER_PAGE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#max_per_page GithubProvider#max_per_page}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-github.provider.GithubProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of retries for failed requests; this defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#max_retries GithubProvider#max_retries}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-github.provider.GithubProviderConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

GitHub organization to manage. This can also be set by the `GITHUB_ORGANIZATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#organization GithubProvider#organization}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-github.provider.GithubProviderConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

GitHub organization or user account to manage;

this is required when authenticating using a GitHub App. If the owner is not provided and a token is provided, the provider will attempt to auto-detect the owner associated with the token. This can also be set by the `GITHUB_OWNER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#owner GithubProvider#owner}

---

##### `ParallelRequests`<sup>Optional</sup> <a name="ParallelRequests" id="@cdktn/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```csharp
public bool|IResolvable ParallelRequests { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allow the provider to make parallel API calls;

this is experimental and may cause concurrency and rate limiting issues. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation is designed to safely handle parallel requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `ReadDelayMs`<sup>Optional</sup> <a name="ReadDelayMs" id="@cdktn/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```csharp
public double ReadDelayMs { get; set; }
```

- *Type:* double

The delay in milliseconds between read operations;

this defaults to `0`. This can be used to mitigate rate limiting issues when performing a large number of read operations. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation is GitHub rate limit aware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `RetryableErrors`<sup>Optional</sup> <a name="RetryableErrors" id="@cdktn/provider-github.provider.GithubProviderConfig.property.retryableErrors"></a>

```csharp
public double[] RetryableErrors { get; set; }
```

- *Type:* double[]

List of HTTP status codes that should be retried;

if not set this uses the provider defaults. This setting only applies when `max_retries` is greater than `0`. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation handles the retry logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#retryable_errors GithubProvider#retryable_errors}

---

##### `RetryDelayMs`<sup>Optional</sup> <a name="RetryDelayMs" id="@cdktn/provider-github.provider.GithubProviderConfig.property.retryDelayMs"></a>

```csharp
public double RetryDelayMs { get; set; }
```

- *Type:* double

The delay in milliseconds between retry attempts;

this defaults to `1000`. This setting only applies when `max_retries` is greater than `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#retry_delay_ms GithubProvider#retry_delay_ms}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-github.provider.GithubProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

GitHub OAuth or Personal Access Token (PAT) to use for authentication.

This can also be set by the `GITHUB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#token GithubProvider#token}

---

##### `WriteDelayMs`<sup>Optional</sup> <a name="WriteDelayMs" id="@cdktn/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```csharp
public double WriteDelayMs { get; set; }
```

- *Type:* double

The delay in milliseconds between write operations;

this defaults to `1000`. This is used to mitigate the GitHub API's abuse rate limits when writing. Note that **ALL** requests to the GraphQL API are implemented as `POST` requests under the hood, so this setting affects those calls as well. This is ignored for the REST API when `legacy_client` is `false` since the new client implementation is GitHub rate limit aware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.13.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---



